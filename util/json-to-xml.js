//copyright Ryan Day 2010 <http://ryanday.org>, Joscha Feth 2013 <http://www.feth.com> [MIT Licensed]

var element_start_char = 
	"a-zA-Z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FFF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
var element_non_start_char = "\-.0-9\u00B7\u0300-\u036F\u203F\u2040"; 
var element_replace = new RegExp("^([^" + element_start_char + "])|^((x|X)(m|M)(l|L))|([^" + element_start_char + element_non_start_char + "])", "g");
var not_safe_in_xml = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;

var process_to_xml = function(node_data,options){

  var makeNode = function(tag, content, attributes, level, hasSubNodes) {

    var indent_value = options.indent !== undefined ? options.indent : "\t";
    var indent = options.prettyPrint ? '\n' + new Array(level).join(indent_value) : '';
    if(options.removeIllegalNameCharacters) {
	tag = tag.replace(element_replace, '_');
    }
    var node = []

    if (level <= 3) {
      if (tag === 'b' || tag === 'strong' || tag === 'i' || tag === 'em' || tag === 'a' || tag === 'code' || tag === 'pre') {
        thatTag = tag
      } else if (tag === 'h3' || tag === 'h4') {
        thatTag = 'strong'
      } else if (tag === 'li') {
        thatTag = 'em'
      } else {
        thatTag = 'p'
        attributes = ''
      }
      node.push(indent);
      node.push('<');
      node.push(thatTag);
      node.push(attributes || '');
      node.push('>');
      if(content && content.length > 0) {
        node.push(content);
        hasSubNodes && node.push(indent);
      } 
      node.push('</');
      node.push(thatTag);
      node.push('>');      
    } else {
      node.push(content);
    }
    return node.join('');
  };

  return (function fn(node_data,node_descriptor, level){
    var type = typeof node_data;
    if((Array.isArray) ? Array.isArray(node_data) : node_data instanceof Array) {
      type = 'array';
    } else if(node_data instanceof Date) {
      type = 'date';
    }

    switch(type) {
    //if value is an array create child nodes from values
      case 'array':
        var ret = [];
        node_data.map(function(v){
            ret.push(fn(v,1, level+1));
            //entries that are values of an array are the only ones that can be special node descriptors
        });
        options.prettyPrint && ret.push('\n');
        return ret.join('');
        break;

      case 'date':
        // cast dates to ISO 8601 date (soap likes it)
        return node_data.toJSON?node_data.toJSON():node_data+'';
        break;

      case 'object':
        if(node_descriptor == 1 && node_data.tag){
          var content = []
          , attributes = []
          ;

          if(node_data.attrs) {          
            if(typeof node_data.attrs != 'object') {
            // attrs is a string, etc. - just use it as an attribute
              attributes.push(' ');
              attributes.push(node_data.attrs);
            } else {
              for(var key in node_data.attrs){
                if(key === 'href' || key === 'src') {
                  var value = node_data.attrs[key];
                  attributes.push(' ');
                  attributes.push(key);
                  attributes.push('="')
                  attributes.push(options.escape ? esc(value) : value);
                  attributes.push('"');
                }
              }
            }            
          }

          //later attributes can be added here
          if(typeof node_data.value != 'undefined') {
            var c = ''+node_data.value;
            content.push(options.escape && !node_data.noescape ? esc(c) : c);
          } else if(typeof node_data.text != 'undefined') {
            var c = ''+node_data.text;
            content.push(options.escape && !node_data.noescape ? esc(c) : c);
          }

          if(node_data.children){
            content.push(fn(node_data.children,0,level+1));
          }

          return makeNode(node_data.tag, content.join(''), attributes.join(''),level,!!node_data.children);

        } else {
          var nodes = [];
          for(var tag in node_data){
            nodes.push(makeNode(tag, fn(node_data[tag],0,level+1),null,level+1));
          }
          options.prettyPrint && nodes.length > 0 && nodes.push('\n');
          return nodes.join('');
        }
        break;

      case 'function':
        return node_data();
        break;

      default:
        return options.escape ? esc(node_data) : ''+node_data;
    }

  }(node_data, 0, 0))
};
module.exports = function(obj,options){

  var Buffer = this.Buffer || function Buffer () {};

  if(typeof obj == 'string' || obj instanceof Buffer) {
    try{
      obj = JSON.parse(obj.toString());
    } catch(e){
      return false;
    }
  }
  
  options = options || {}

  return process_to_xml(obj,options);
}

module.exports.json_to_xml=
module.exports.obj_to_xml = module.exports;

module.exports.escape = esc;

function esc(str){
  return (''+str).replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&apos;')
      .replace(/"/g, '&quot;')
      .replace(not_safe_in_xml, '');
}