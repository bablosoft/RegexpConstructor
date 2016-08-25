_L = 
{

	"I want to build regular expression!" :{"ru": "Хочу создать регулярное выражение!"},
	"Input result together with side text." :{"ru": "Введите результат и обрамляющий его текст."},
	"Next" :{"ru": "Дальше"},
	"See video tutorial on" :{"ru": "Смотрите видео руководство на"},
	"Previous" :{"ru": "Назад"},
	"Now select result." :{"ru": "Теперь выделите результат."},
	"Mark parts of text and convert them to regular expression." :{"ru": "Помечайте части текста и превращайте их в регулярное выражение."},
	"You have selected part of text, please select what forms can it take?" :{"ru": "Вы выделили часть текса, выберите каким образом он может изменяться?"},
	"Exact text" :{"ru": "Точный текст"},
	"Any symbol" :{"ru": "Любой символ"},
	"Ignore that text" :{"ru": "Игнорировать этот текст"},
	"Digit" :{"ru": "Цифра"},
	"Whitespace" :{"ru": "Пробел"},
	"Letter" :{"ru": "Буква"},
	"One of many options" :{"ru": "Один из нескольких вариантов"},
	"More" :{"ru": "Добавить"},
	"Any letters from set" :{"ru": "Любые символы из списка"},
	"This field can contain character set, 0123456789 - means letters. Also ranges are available, 0-9 means any digit, a-zA-Z any english letter." :{"ru": "Это поле может содержать набор символов, 0123456789 - любые цифры. 0-9 означает тоже самое. a-zA-Z любые латинские символы"},
	"Any letters which set doesn't contain" :{"ru": "Любые символы, которые список не содержит"},
	"Custom regexp" :{"ru": "Пользовательсоке регулярное выражение"},
	"How many times this text can occur" :{"ru": "Сколько раз указанный текст может встречаться"},
	"One time" :{"ru": "Один раз"},
	"One or zero time" :{"ru": "Ни разу или один раз"},
	"Zero or more times" :{"ru": "Ни разу или несколько раз"},
	"One or more times" :{"ru": "Один раз или несколько раз"},
	"From n to m times" :{"ru": "От n до m раз"},
	"From" :{"ru": "От"},
	"To" :{"ru": "До"},
	"Close" :{"ru": "Отмена"},
	"Accept" :{"ru": "Принять"},
	"This tool is part of" :{"ru": "Этот инструмент является частью"},
	"Your regular expression is:" :{"ru": "Ваше регулярное выражение:"},
	"Input text to test regular expression here" :{"ru": "Скопируйте текст, на котором тестировать регулярное выражение в это поле"},
	"This area will contain result" :{"ru": "Это поле будет содержать результат"},
	"No matches found" :{"ru": "Не найдено соответствий"},
	"Match as few times as possible" :{"ru": "Находить настолько меньше символов, насколько это возможно"},
	"Use only text needed to match text. For example, if you want to capture links on page, you can use &lt;a href=\"http://google.com\"" :{"ru": "Используйте только тот текст, который необходим для поиска соответствия. Например, если вы хотите найти все ссылки на странице, вы можете использовать &lt;a href=\"http://google.com\""},
	"Copy" :{"ru": "Копировать"},
}


function tr(key)
{
	if(typeof(key) == "undefined")
	{

		var all = $(".tr")
		
		for(var i = 0;i< all.length;i++)
		{
			var el = $(all[i])
			if(typeof(el.attr("tr")) == "undefined" || el.attr("tr") != "true" )
			{
				el.html(tr(el.html()))
				el.attr("tr","true")
			}
		}

		all = $(".trtitle")
		
		for(var i = 0;i< all.length;i++)
		{
			var el = $(all[i])
			if(typeof(el.attr("tr")) == "undefined" || el.attr("tr") != "true" )
			{
				el.attr("title",tr(el.attr("title")))
				el.attr("tr","true")
			}
		}

		var all = $("*[placeholder]")
		
		for(var i = 0;i< all.length;i++)
		{
			var el = $(all[i])
			if(typeof(el.attr("tr")) == "undefined" || el.attr("tr") != "true" )
			{
				el.attr("placeholder",tr(el.attr("placeholder")))
				el.attr("tr","true")
			}
		}

		
		
		return;
	}

	
	if(typeof(_K) == "undefined" || _K == "en")
		return key;

	if(key in _L)
	{
		if(_K in _L[key])
		{
			return _L[key][_K]
		}
	}
	return key;
}
