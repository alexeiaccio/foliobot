const content = [
	[
		{
			"tag": "figure",
			"children": [
				{
					"tag": "img",
					"attrs": {
						"src": "http://telegra.ph/file/6a5b15e7eb4d7329ca7af.jpg"
					}
				},
				{
					"tag": "figcaption",
					"children": [
						""
					]
				}
			]
		},
		{
			"tag": "p",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Telegra.ph"
					]
				},
				" is a minimalist publishing tool that allows you to create richly formatted posts and push them to the Web in just a click. ",
				{
					"tag": "strong",
					"children": [
						"Telegraph"
					]
				},
				" posts also get beautiful ",
				{
					"tag": "a",
					"attrs": {
						"href": "https://telegram.org/blog/instant-view",
						"target": "_blank"
					},
					"children": [
						"Instant View"
					]
				},
				" pages on ",
				{
					"tag": "strong",
					"children": [
						"Telegram"
					]
				},
				"."
			]
		},
		{
			"tag": "p",
			"children": [
				"To maintain the purity of the basic interface, we launched the ",
				{
					"tag": "a",
					"attrs": {
						"href": "https://telegram.me/telegraph",
						"target": "_blank"
					},
					"children": [
						{
							"tag": "strong",
							"children": [
								"@Telegraph"
							]
						}
					]
				},
				{
					"tag": "strong",
					"children": [
						" bot"
					]
				},
				" for those who require advanced features. This bot can help you manage your articles across any number of devices and get page view statistics for any Telegraph page."
			]
		},
		{
			"tag": "p",
			"children": [
				"Anyone can enjoy the simplicity of Telegraph publishing, not just ",
				{
					"tag": "a",
					"attrs": {
						"href": "https://telegram.org/",
						"target": "_blank"
					},
					"children": [
						"Telegram"
					]
				},
				" users. For this reason, all developers are welcome to use this ",
				{
					"tag": "strong",
					"children": [
						"Telegraph API"
					]
				},
				" to create bots like ",
				{
					"tag": "a",
					"attrs": {
						"href": "https://telegram.me/telegraph",
						"target": "_blank"
					},
					"children": [
						"@Telegraph"
					]
				},
				" for any other platform, or even standalone interfaces."
			]
		},
		{
			"tag": "p",
			"children": [
				{
					"tag": "br"
				}
			]
		},
		{
			"tag": "p",
			"children": [
				"All queries to the Telegraph API must be served over ",
				{
					"tag": "strong",
					"children": [
						"HTTPS"
					]
				},
				" and should be presented in this form: ",
				{
					"tag": "code",
					"children": [
						"https://api.telegra.ph/%method%"
					]
				},
				". "
			]
		},
		{
			"tag": "p",
			"children": [
				"If a ",
				{
					"tag": "code",
					"children": [
						"path"
					]
				},
				" parameter is present, you can also use this form: ",
				{
					"tag": "code",
					"children": [
						"https://api.telegra.ph/%method%/%path%"
					]
				},
				"."
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "1.-Methods"
			},
			"children": [
				{
					"tag": "a",
					"attrs": {
						"href": "#Available-methods"
					},
					"children": [
						"1. Methods"
					]
				}
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#createAccount"
							},
							"children": [
								"createAccount"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#createPage"
							},
							"children": [
								"createPage"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#editAccountInfo"
							},
							"children": [
								"editAccountInfo"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#editPage"
							},
							"children": [
								"editPage"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#getAccountInfo"
							},
							"children": [
								"getAccountInfo"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#getPage"
							},
							"children": [
								"getPage"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#getPageList"
							},
							"children": [
								"getPageList"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#getViews"
							},
							"children": [
								"getViews"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#revokeAccessToken"
							},
							"children": [
								"revokeAccessToken"
							]
						}
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "2.-Types"
			},
			"children": [
				{
					"tag": "a",
					"attrs": {
						"href": "#Available-types"
					},
					"children": [
						"2. Types"
					]
				}
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#Account"
							},
							"children": [
								"Account"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#Node"
							},
							"children": [
								"Node"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#NodeElement"
							},
							"children": [
								"NodeElement"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#Page"
							},
							"children": [
								"Page"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#PageList"
							},
							"children": [
								"PageList"
							]
						}
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "a",
							"attrs": {
								"href": "#PageViews"
							},
							"children": [
								"PageViews"
							]
						}
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "3.-Content-format"
			},
			"children": [
				{
					"tag": "a",
					"attrs": {
						"href": "#Content-format"
					},
					"children": [
						"3. Content format"
					]
				}
			]
		},
		{
			"tag": "h3",
			"attrs": {
				"id": ""
			},
			"children": [
				{
					"tag": "br"
				}
			]
		},
		{
			"tag": "h3",
			"attrs": {
				"id": "Available-methods"
			},
			"children": [
				"Available methods"
			]
		},
		{
			"tag": "p",
			"children": [
				"We support ",
				{
					"tag": "strong",
					"children": [
						"GET"
					]
				},
				" and ",
				{
					"tag": "strong",
					"children": [
						"POST"
					]
				},
				" HTTP methods. The response contains a JSON object, which always has a Boolean field ",
				{
					"tag": "code",
					"children": [
						"ok"
					]
				},
				". If ",
				{
					"tag": "code",
					"children": [
						"ok"
					]
				},
				" equals ",
				{
					"tag": "em",
					"children": [
						"true"
					]
				},
				", the request was successful, and the result of the query can be found in the ",
				{
					"tag": "code",
					"children": [
						"result"
					]
				},
				" field. In case of an unsuccessful request, ",
				{
					"tag": "code",
					"children": [
						"ok"
					]
				},
				" equals ",
				{
					"tag": "em",
					"children": [
						"false,"
					]
				},
				" and the error is explained in the ",
				{
					"tag": "code",
					"children": [
						"error"
					]
				},
				" field (e.g. SHORT_NAME_REQUIRED). All queries must be made using UTF-8."
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "createAccount"
			},
			"children": [
				"createAccount"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to create a new Telegraph account. Most users only need one account, but this can be useful for channel administrators who would like to keep individual author names and profile links for each of their channels. On success, returns an ",
				{
					"tag": "a",
					"attrs": {
						"href": "#Account"
					},
					"children": [
						"Account"
					]
				},
				" object with the regular fields and an additional ",
				{
					"tag": "code",
					"children": [
						"access_token"
					]
				},
				" field."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"short_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 1-32 characters"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Account name, helps users with several accounts remember which they are currently using. Displayed to the user above the \"Edit/Publish\" button on Telegra.ph, other users don't see this name."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-128 characters"
							]
						},
						")\nDefault author name used when creating new articles."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-512 characters"
							]
						},
						")\nDefault profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/createAccount?short_name=Sandbox&author_name=Anonymous",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/createAccount?short_name=Sandbox&author_name=Anonymous"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "editAccountInfo"
			},
			"children": [
				"editAccountInfo"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to update information about a Telegraph account. Pass only the parameters that you want to edit. On success, returns an ",
				{
					"tag": "a",
					"attrs": {
						"href": "#Account"
					},
					"children": [
						"Account"
					]
				},
				" object with the default fields."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"access_token"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Access token of the Telegraph account."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"short_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 1-32 characters"
							]
						},
						")\nNew account name."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-128 characters"
							]
						},
						")\nNew default author name used when creating new articles."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-512 characters"
							]
						},
						")\nNew default profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/editAccountInfo?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&short_name=Sandbox&author_name=Anonymous",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/editAccountInfo?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&short_name=Sandbox&author_name=Anonymous"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "getAccountInfo"
			},
			"children": [
				"getAccountInfo"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to get information about a Telegraph account. Returns an ",
				{
					"tag": "a",
					"attrs": {
						"href": "#Account"
					},
					"children": [
						"Account"
					]
				},
				" object on success."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"access_token"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Access token of the Telegraph account."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"fields"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Array of String, default = [“short_name”,“author_name”,“author_url”]"
							]
						},
						")\nList of account fields to return. Available fields: ",
						{
							"tag": "em",
							"children": [
								"short_name"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"author_name"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"author_url"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"auth_url"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"page_count"
							]
						},
						"."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/getAccountInfo?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&fields=[%22short_name%22,%22page_count%22]",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/getAccountInfo?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&fields=[\"short_name\",\"page_count\"]"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "revokeAccessToken"
			},
			"children": [
				"revokeAccessToken"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to revoke access_token and generate a new one, for example, if the user would like to reset all connected sessions, or you have reasons to believe the token was compromised. On success, returns an ",
				{
					"tag": "a",
					"attrs": {
						"href": "#Account"
					},
					"children": [
						"Account"
					]
				},
				" object with new ",
				{
					"tag": "code",
					"children": [
						"access_token"
					]
				},
				" and ",
				{
					"tag": "code",
					"children": [
						"auth_url"
					]
				},
				" fields."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"access_token"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Access token of the Telegraph account."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/revokeAccessToken?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/revokeAccessToken?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "createPage"
			},
			"children": [
				"createPage"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to create a new Telegraph page. On success, returns a ",
				{
					"tag": "a",
					"attrs": {
						"href": "#Page"
					},
					"children": [
						"Page"
					]
				},
				" object."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"access_token"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Access token of the Telegraph account."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"title"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 1-256 characters"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Page title."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-128 characters"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						"Author name, displayed below the article's title."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-512 characters"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						"Profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"content"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Array of "
							]
						},
						{
							"tag": "a",
							"attrs": {
								"href": "#Node"
							},
							"children": [
								{
									"tag": "em",
									"children": [
										"Node"
									]
								}
							]
						},
						{
							"tag": "em",
							"children": [
								", up to 64 KB"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								{
									"tag": "em",
									"children": [
										"\n"
									]
								}
							]
						},
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". ",
						{
							"tag": "a",
							"attrs": {
								"href": "#Content-format"
							},
							"children": [
								"Content"
							]
						},
						" of the page. "
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"return_content"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Boolean, default = false"
							]
						},
						")\nIf ",
						{
							"tag": "em",
							"children": [
								"true"
							]
						},
						", a ",
						{
							"tag": "code",
							"children": [
								"content"
							]
						},
						" field will be returned in the ",
						{
							"tag": "a",
							"attrs": {
								"href": "#Page"
							},
							"children": [
								"Page"
							]
						},
						" object (see: ",
						{
							"tag": "a",
							"attrs": {
								"href": "#Content-format"
							},
							"children": [
								"Content format"
							]
						},
						")."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/createPage?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&title=Sample+Page&author_name=Anonymous&content=[{%22tag%22:%22p%22,%22children%22:[%22Hello,+world!%22]}]&return_content=true",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/createPage?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&title=Sample+Page&author_name=Anonymous&content=[{\"tag\":\"p\",\"children\":[\"Hello,+world!\"]}]&return_content=true"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "editPage"
			},
			"children": [
				"editPage"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to edit an existing Telegraph page. On success, returns a ",
				{
					"tag": "a",
					"attrs": {
						"href": "#Page"
					},
					"children": [
						"Page"
					]
				},
				" object."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"access_token"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Access token of the Telegraph account."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"path"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Path to the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"title"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 1-256 characters"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Page title."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"content"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Array of "
							]
						},
						{
							"tag": "a",
							"attrs": {
								"href": "#Node"
							},
							"children": [
								{
									"tag": "em",
									"children": [
										"Node"
									]
								}
							]
						},
						{
							"tag": "em",
							"children": [
								", up to 64 KB"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								{
									"tag": "em",
									"children": [
										"\n"
									]
								}
							]
						},
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". ",
						{
							"tag": "a",
							"attrs": {
								"href": "#Content-format"
							},
							"children": [
								"Content"
							]
						},
						" of the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-128 characters"
							]
						},
						")\nAuthor name, displayed below the article's title."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String, 0-512 characters"
							]
						},
						")\nProfile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"return_content"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Boolean, default = false"
							]
						},
						")\nIf ",
						{
							"tag": "em",
							"children": [
								"true"
							]
						},
						", a ",
						{
							"tag": "code",
							"children": [
								"content"
							]
						},
						" field will be returned in the ",
						{
							"tag": "a",
							"attrs": {
								"href": "#Page"
							},
							"children": [
								"Page"
							]
						},
						" object."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/editPage/Sample-Page-12-15?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&title=Sample+Page&author_name=Anonymous&content=[{%22tag%22:%22p%22,%22children%22:[%22Hello,+world!%22]}]&return_content=true",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/editPage/Sample-Page-12-15?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&title=Sample+Page&author_name=Anonymous&content=[{\"tag\":\"p\",\"children\":[\"Hello,+world!\"]}]&return_content=true"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "getPage"
			},
			"children": [
				"getPage"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to get a Telegraph page. Returns a ",
				{
					"tag": "a",
					"attrs": {
						"href": "#Page"
					},
					"children": [
						"Page"
					]
				},
				" object on success."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"path"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Path to the Telegraph page (in the format ",
						{
							"tag": "code",
							"children": [
								"Title-12-31"
							]
						},
						", i.e. everything that comes after ",
						{
							"tag": "code",
							"children": [
								"http://telegra.ph/"
							]
						},
						")."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"return_content"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Boolean, default = false"
							]
						},
						")\nIf ",
						{
							"tag": "em",
							"children": [
								"true"
							]
						},
						", ",
						{
							"tag": "code",
							"children": [
								"content"
							]
						},
						" field will be returned in ",
						{
							"tag": "a",
							"attrs": {
								"href": "#Page"
							},
							"children": [
								"Page"
							]
						},
						" object."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/getPage/Sample-Page-12-15?return_content=true",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/getPage/Sample-Page-12-15?return_content=true"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "getPageList"
			},
			"children": [
				"getPageList"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to get a list of pages belonging to a Telegraph account. Returns a ",
				{
					"tag": "a",
					"attrs": {
						"href": "#PageList"
					},
					"children": [
						"PageList"
					]
				},
				" object, sorted by most recently created pages first."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"access_token"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Access token of the Telegraph account."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"offset"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer, default = 0"
							]
						},
						")\nSequential number of the first page to be returned."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"limit"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer, 0-200, default = 50"
							]
						},
						")\nLimits the number of pages to be retrieved."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/getPageList?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&limit=3",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/getPageList?access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&limit=3"
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "getViews"
			},
			"children": [
				"getViews"
			]
		},
		{
			"tag": "p",
			"children": [
				"Use this method to get the number of views for a Telegraph article. Returns a ",
				{
					"tag": "a",
					"attrs": {
						"href": "#PageViews"
					},
					"children": [
						"PageViews"
					]
				},
				" object on success. By default, the total number of page views will be returned."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"path"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required"
							]
						},
						". Path to the Telegraph page (in the format ",
						{
							"tag": "code",
							"children": [
								"Title-12-31"
							]
						},
						", where 12 is the month and 31 the day the article was first published)."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"year"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer, 2000-2100"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required if month is passed"
							]
						},
						". If passed, the number of page views for the requested year will be returned."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"month"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer, 1-12"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required if day is passed"
							]
						},
						". If passed, the number of page views for the requested month will be returned."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"day"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer, 1-31"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Required if hour is passed"
							]
						},
						". If passed, the number of page views for the requested day will be returned."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"hour"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer, 0-24"
							]
						},
						")\nIf passed, the number of page views for the requested hour will be returned."
					]
				}
			]
		},
		{
			"tag": "blockquote",
			"children": [
				{
					"tag": "strong",
					"children": [
						"Sample request\n"
					]
				},
				{
					"tag": "a",
					"attrs": {
						"href": "https://api.telegra.ph/getViews/Sample-Page-12-15?year=2016&month=12",
						"target": "_blank"
					},
					"children": [
						"https://api.telegra.ph/getViews/Sample-Page-12-15?year=2016&month=12"
					]
				}
			]
		},
		{
			"tag": "h3",
			"attrs": {
				"id": "Available-types"
			},
			"children": [
				"Available types"
			]
		},
		{
			"tag": "p",
			"children": [
				"All types used in the Telegraph API responses are represented as JSON-objects. Optional fields may be not returned when irrelevant."
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "Account"
			},
			"children": [
				"Account"
			]
		},
		{
			"tag": "p",
			"children": [
				"This object represents a Telegraph account. "
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"short_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						"Account name, helps users with several accounts remember which they are currently using. Displayed to the user above the \"Edit/Publish\" button on Telegra.ph, other users don't see this name."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						"Default author name used when creating new articles."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						"Profile link, opened when users click on the author's name below the title. Can be any link, not necessarily to a Telegram profile or channel."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"access_token"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional. Only returned by the "
							]
						},
						{
							"tag": "a",
							"attrs": {
								"href": "#createAccount"
							},
							"children": [
								{
									"tag": "em",
									"children": [
										"createAccount"
									]
								}
							]
						},
						{
							"tag": "em",
							"children": [
								" and "
							]
						},
						{
							"tag": "a",
							"attrs": {
								"href": "#revokeAccessToken"
							},
							"children": [
								{
									"tag": "em",
									"children": [
										"revokeAccessToken"
									]
								}
							]
						},
						{
							"tag": "em",
							"children": [
								" method. "
							]
						},
						"Access token of the Telegraph account."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"auth_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional"
							]
						},
						". URL to authorize a browser on ",
						{
							"tag": "a",
							"attrs": {
								"href": "/"
							},
							"children": [
								"telegra.ph"
							]
						},
						" and connect it to a Telegraph account. This URL is valid for only one use and for 5 minutes only."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"page_count"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional"
							]
						},
						". Number of pages belonging to the Telegraph account."
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "PageList"
			},
			"children": [
				"PageList"
			]
		},
		{
			"tag": "p",
			"children": [
				"This object represents a list of Telegraph articles belonging to an account. Most recently created articles first."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"total_count"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer"
							]
						},
						")\nTotal number of pages belonging to the target Telegraph account."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"pages"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Array of "
							]
						},
						{
							"tag": "a",
							"attrs": {
								"href": "#Page"
							},
							"children": [
								{
									"tag": "em",
									"children": [
										"Page"
									]
								}
							]
						},
						")\nRequested pages of the target Telegraph account."
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "Page"
			},
			"children": [
				"Page"
			]
		},
		{
			"tag": "p",
			"children": [
				"This object represents a page on Telegraph."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"path"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\nPath to the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"url"
							]
						},
						" (String)\nURL of the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"title"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\nTitle of the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"description"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\nDescription of the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_name"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional"
							]
						},
						". Name of the author, displayed below the title."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"author_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional"
							]
						},
						". Profile link, opened when users click on the author's name below the title.  Can be any link, not necessarily to a Telegram profile or channel."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"image_url"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional"
							]
						},
						". Image URL of the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"content"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Array of "
							]
						},
						{
							"tag": "a",
							"attrs": {
								"href": "#Node"
							},
							"children": [
								{
									"tag": "em",
									"children": [
										"Node"
									]
								}
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional"
							]
						},
						". ",
						{
							"tag": "a",
							"attrs": {
								"href": "#Content-format"
							},
							"children": [
								"Content"
							]
						},
						" of the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"views"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer"
							]
						},
						")\nNumber of page views for the page."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"can_edit"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Boolean"
							]
						},
						")\n",
						{
							"tag": "em",
							"children": [
								"Optional. Only returned if access_token passed"
							]
						},
						". ",
						{
							"tag": "em",
							"children": [
								"True"
							]
						},
						", if the target Telegraph account can edit the page."
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "PageViews"
			},
			"children": [
				"PageViews"
			]
		},
		{
			"tag": "p",
			"children": [
				"This object represents the number of page views for a Telegraph article."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"views"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Integer"
							]
						},
						")\nNumber of page views for the target page."
					]
				}
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "Node"
			},
			"children": [
				"Node"
			]
		},
		{
			"tag": "p",
			"children": [
				"This abstract object represents a DOM Node. It can be a ",
				{
					"tag": "em",
					"children": [
						"String"
					]
				},
				" which represents a DOM text node or a ",
				{
					"tag": "a",
					"attrs": {
						"href": "#NodeElement"
					},
					"children": [
						"NodeElement"
					]
				},
				" object."
			]
		},
		{
			"tag": "h4",
			"attrs": {
				"id": "NodeElement"
			},
			"children": [
				"NodeElement"
			]
		},
		{
			"tag": "p",
			"children": [
				"This object represents a DOM element node."
			]
		},
		{
			"tag": "ul",
			"children": [
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"tag"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"String"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						"Name of the DOM element. Available tags: ",
						{
							"tag": "em",
							"children": [
								"a"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"aside"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"b"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"blockquote"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"br"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"code"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"em"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"figcaption"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"figure"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"h3"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"h4"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"hr"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"i"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"iframe"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"img"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"li"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"ol"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"p"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"pre"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"s"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"strong"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"u"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"ul"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"video"
							]
						},
						"."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"attrs"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Object"
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						{
							"tag": "em",
							"children": [
								"Optional. "
							]
						},
						"Attributes of the DOM element. Key of object represents name of attribute, value represents value of attribute. Available attributes: ",
						{
							"tag": "em",
							"children": [
								"href"
							]
						},
						", ",
						{
							"tag": "em",
							"children": [
								"src"
							]
						},
						"."
					]
				},
				{
					"tag": "li",
					"children": [
						{
							"tag": "strong",
							"children": [
								"children"
							]
						},
						" (",
						{
							"tag": "em",
							"children": [
								"Array of "
							]
						},
						{
							"tag": "a",
							"attrs": {
								"href": "#Node"
							},
							"children": [
								{
									"tag": "em",
									"children": [
										"Node"
									]
								}
							]
						},
						")",
						{
							"tag": "strong",
							"children": [
								"\n"
							]
						},
						{
							"tag": "em",
							"children": [
								"Optional. "
							]
						},
						"List of child nodes for the DOM element."
					]
				}
			]
		},
		{
			"tag": "h3",
			"attrs": {
				"id": "Content-format"
			},
			"children": [
				"Content format"
			]
		},
		{
			"tag": "p",
			"children": [
				"The Telegraph API uses a DOM-based format to represent the content of the page. Below is an example of code in javascript which explains how you can use it:"
			]
		},
		{
			"tag": "pre",
			"children": [
				"function domToNode(domNode) {\n  if (domNode.nodeType == domNode.TEXT_NODE) {\n    return domNode.data;\n  }\n  if (domNode.nodeType != domNode.ELEMENT_NODE) {\n    return false;\n  }\n  var nodeElement = {};\n  nodeElement.tag = domNode.tagName.toLowerCase();\n  for (var i = 0; i < domNode.attributes.length; i++) {\n    var attr = domNode.attributes[i];\n    if (attr.name == 'href' || attr.name == 'src') {\n      if (!nodeElement.attrs) {\n        nodeElement.attrs = {};\n      }\n      nodeElement.attrs[attr.name] = attr.value;\n    }\n  }\n  if (domNode.childNodes.length > 0) {\n    nodeElement.children = [];\n    for (var i = 0; i < domNode.childNodes.length; i++) {\n      var child = domNode.childNodes[i];\n      nodeElement.children.push(domToNode(child));\n    }\n  }\n  return nodeElement;\n}\n\nfunction nodeToDom(node) {\n  if (typeof node === 'string' || node instanceof String) {\n    return document.createTextNode(node);\n  }\n  if (node.tag) {\n    var domNode = document.createElement(node.tag);\n    if (node.attrs) {\n      for (var name in node.attrs) {\n        var value = node.attrs[name];\n        domNode.setAttribute(name, value);\n      }\n    }\n  } else {\n    var domNode = document.createDocumentFragment();\n  }\n  if (node.children) {\n    for (var i = 0; i < node.children.length; i++) {\n      var child = node.children[i];\n      domNode.appendChild(nodeToDom(child));\n    }\n  }\n  return domNode;\n}\n\nvar article = document.getElementById('article');\nvar content = domToNode(article).children;\n$.ajax('https://api.telegra.ph/createPage', {\n  data: {\n    access_token:   '%access_token%',\n    title:          'Title of page',\n    content:        JSON.stringify(content),\n    return_content: true\n  },\n  type: 'POST',\n  dataType: 'json',\n  success: function(data) {\n    if (data.content) {\n      while (article.firstChild) {\n        article.removeChild(article.firstChild);\n      }\n      article.appendChild(nodeToDom({children: data.content}));\n    }\n  }\n});\n"
			]
		},
		{
			"tag": "p",
			"children": [
				{
					"tag": "br"
				}
			]
		}
	]
]

const jsonxml = require('./json-to-xml')

console.log(jsonxml(content))
