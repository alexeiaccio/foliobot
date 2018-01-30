const {getMaxPage, getText} = require('./text-handlers')
const Telegraph = require('telegra.ph')
const client = new Telegraph()

const fakeFunction = query => {
  client.getPage(query, true)
    .then(page => {
      let text = ''
      for (let i=0; i<page.content.length; i++) {
        text = text + page.content[i].children[0]
      }      
      let message = getText(text, 600, 1)
      return message
    })
}

let str = `Написал про (Не)выставку НИИЧЕГОДЕЛАТЬ «Уют и пропаганда»:
Это рано или поздно должно было случиться: из гнезда Школы вовлеченного искусства группы «Что делать?» (из 3-го ее набора*) выпал «отщепенец» — пародийный проект «н и и ч е г о д е л, а т ь», который уже в самом названии, отбросившем знак вопроса как долженствование, слишком завязанное на трудовую мораль и этику, сразу заявляет: «ничего не делать». То есть вот так буквально: научно-исследовательский институт ничегонеделания, дуракаваляния, прокрастинации и бездействия. Цель: подрыв труда и сопутствующего ему поведения. Если группа «Что делать?» имела своим предикатом «рабочая», то «н и и ч е г о д е л, а т ь»могло бы в качестве такового использовать «безработная». Но безработица все еще слишком заражена трудовой повинностью — тогда как пафос «н и и ч е г о д е л, а т ь» — мир без труда, или, выражаясь языком левых акселерационистов (философских термодателей группы) — пост-трудовое общество. Нынешний состав 13 человек (в выставке участвуют девять) — все девушки по половой, но не гендерной принадлежности. Мы ограничимся указанием на общую квирность проекта. Причем квирность касается и социальной гетерогенности — большая часть участниц имеют нехудожественные профессии и наборы жизненных активностей, но все так или иначе видят искусство как наиболее удобный способпомыслить и главное дать зримое воплощение ничегонеделанию. Вот отрывок из самоописания группы, почти освобождающий критика от вмысливания собственных понятий: «н и и ч е г о д е л, а т ь изучает темы времени (горение-акселерация, гниение-остановка), связности пространств (интимные интерфейсы), исследует тело и его возможности к замедлению и ускорению, а также роль тунеядца, прокрастинатора, прекария и бездельника в современном мире».
Поэтому скорее к выставке. Пространство ДК Розы поделено на большой зал — чиллаут с приглушенным светом фоотообоями ТРУД NO и матрасами для отдыха — и малую комнату с схемой-ретроспекцией предыдущих акций «н и и» во всю стену, начиная с учредительного события — участия в 1-майской демонстрации в знак солидарностис тунеядцами Беларуси, где в это время был введен налог на тунеядство. В малом же зале поставлено на луп завораживающее своей медитативностью time based видео с изображением процесса работы компьютерного верстальщика рекламных буклетов и распечатанными из него скриншотами, напоминающими постдигитальную визуальную поэзию. В большом зале полный зал гостей (в это же день случилась презентация нового (уже 4-го !) набора Школы вовлеченного искусства Что делать. Все снимают обувь и ложатся на матрасы. Атмосфера походит на собрание новой секты прокрастинации. Прости нас нация, что мы тут лежим и не работаем. Гаситсясвет. На стену проецируется специально созданный чат «н и и ч е г о д е л, а т ь» с демотиваторами типа «не вставай с кровати ни для какого дяди», смешными рисованными гифками и комментариями. Закройте глаза. Представьте себе QR код. Начинаем семинар по тексту Ника Срничека и Алекса Уильямса «Изобретая будущее: Посткапитализм и мир без работы». В руках у многих бюджетная брошюра на розовой бумаге, открывающаяся манифестом «Мир без труда» за авторством одной из участниц группы философа Йожи Столет. В нем речь о снятии дуализма труда и отдыха, о спаривании с машинами (Д.Харауэй), о новой этике желанного, а не обязательного труда, о перерапсределении стрессаи переподчинении труда собственному ритму, о приоритете труда активистов, исследователей и волонтеров перед логикой производства/потребления наконец. Далее следует дискуссия по безусловному базовому доходу. Тема живая и острая, обсуждается живо всеми пришедшими. Позиции поляризуются от того, что базовый доход ¬– благо для развития и социальной гармонизации личности до «базовый доход — неолиберальная ловушка и источник паразитизма. Общий знаменатель подвести невозможно, но ясно одно — пока базовый доход нераспространим на все человечество — он не является панацеей от капитализма. Далее следует обещанное замедленное ускорение или ускоренное замедление — дискотека для лежащих на матрасах тел.`

console.log(getMaxPage(str, 600))
//console.log(getPart(str, 600))
console.log(getText(str, 600, 2))

test('Get max page', () => {
  expect(getMaxPage(str, 600)).toBe(6)
})
