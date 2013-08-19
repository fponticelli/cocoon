(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var thx = {}
thx.culture = {}
thx.culture.Domain = function(name,pluralRule) {
	this.name = name;
	this.pluralRule = pluralRule;
};
$hxClasses["thx.culture.Domain"] = thx.culture.Domain;
thx.culture.Domain.__name__ = ["thx","culture","Domain"];
thx.culture.Domain.prototype = {
	toString: function() {
		return this.name;
	}
	,pluralRule: null
	,name: null
	,__class__: thx.culture.Domain
}
thx.culture.Language = function(name,$native,english,iso2,iso3,pluralRule) {
	thx.culture.Domain.call(this,name,pluralRule);
	this["native"] = $native;
	this.english = english;
	this.iso2 = iso2;
	this.iso3 = iso3;
	thx.culture.Language.register(this);
};
$hxClasses["thx.culture.Language"] = thx.culture.Language;
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.create = function(name,$native,english,iso2,iso3,pluralRule) {
	return new thx.culture.Language(name,$native,english,iso2,iso3,pluralRule);
}
thx.culture.Language.createFromObject = function(ob) {
	return new thx.culture.Language(ob.name,ob["native"],ob.english,ob.iso2,ob.iso3,ob.pluralRule);
}
thx.culture.Language.register = function(language) {
	thx.culture.Language.languages.set(thx.culture.Language.getNativeKey(language["native"]),language);
	thx.culture.Language.languages.set(thx.culture.Language.getNameKey(language.name),language);
	thx.culture.Language.languages.set(thx.culture.Language.getIso2Key(language.iso2),language);
	thx.culture.Language.languages.set(thx.culture.Language.getIso3Key(language.iso3),language);
}
thx.culture.Language.getByName = function(name,alt) {
	return thx.culture.Language.languages.exists(thx.culture.Language.getNameKey(name))?thx.culture.Language.languages.get(thx.culture.Language.getNameKey(name)):null == alt?thx.culture.Language.invariant:alt;
}
thx.culture.Language.getByNativeName = function(name,alt) {
	return thx.culture.Language.languages.exists(thx.culture.Language.getNativeKey(name))?thx.culture.Language.languages.get(thx.culture.Language.getNativeKey(name)):null == alt?thx.culture.Language.invariant:alt;
}
thx.culture.Language.getByIso2 = function(name,alt) {
	return thx.culture.Language.languages.exists(thx.culture.Language.getIso2Key(name))?thx.culture.Language.languages.get(thx.culture.Language.getIso2Key(name)):null == alt?thx.culture.Language.invariant:alt;
}
thx.culture.Language.getByIso3 = function(name,alt) {
	return thx.culture.Language.languages.exists(thx.culture.Language.getIso3Key(name))?thx.culture.Language.languages.get(thx.culture.Language.getIso3Key(name)):null == alt?thx.culture.Language.invariant:alt;
}
thx.culture.Language.getNativeKey = function(key) {
	return "NATIVE:" + key;
}
thx.culture.Language.getNameKey = function(key) {
	return "NAME:" + key;
}
thx.culture.Language.getIso2Key = function(key) {
	return "ISO2:" + key;
}
thx.culture.Language.getIso3Key = function(key) {
	return "ISO3:" + key;
}
thx.culture.Language.__super__ = thx.culture.Domain;
thx.culture.Language.prototype = $extend(thx.culture.Domain.prototype,{
	toString: function() {
		return this["native"] + " (" + this.english + ")";
	}
	,iso3: null
	,iso2: null
	,english: null
	,'native': null
	,__class__: thx.culture.Language
});
thx.culture.DateTime = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	this.months = months;
	this.abbrMonths = abbrMonths;
	this.days = days;
	this.abbrDays = abbrDays;
	this.shortDays = shortDays;
	this.am = am;
	this.pm = pm;
	this.separatorDate = separatorDate;
	this.separatorTime = separatorTime;
	this.firstWeekDay = firstWeekDay;
	this.patternYearMonth = patternYearMonth;
	this.patternMonthDay = patternMonthDay;
	this.patternDate = patternDate;
	this.patternDateShort = patternDateShort;
	this.patternDateRfc = patternDateRfc;
	this.patternDateTime = patternDateTime;
	this.patternUniversal = patternUniversal;
	this.patternSortable = patternSortable;
	this.patternTime = patternTime;
	this.patternTimeShort = patternTimeShort;
};
$hxClasses["thx.culture.DateTime"] = thx.culture.DateTime;
thx.culture.DateTime.__name__ = ["thx","culture","DateTime"];
thx.culture.DateTime.create = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	return new thx.culture.DateTime(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort);
}
thx.culture.DateTime.createFromObject = function(ob) {
	return new thx.culture.DateTime(ob.months,ob.abbrMonths,ob.days,ob.abbrDays,ob.shortDays,ob.am,ob.pm,ob.separatorDate,ob.separatorTime,ob.firstWeekDay,ob.patternYearMonth,ob.patternMonthDay,ob.patternDate,ob.patternDateShort,ob.patternDateRfc,ob.patternDateTime,ob.patternUniversal,ob.patternSortable,ob.patternTime,ob.patternTimeShort);
}
thx.culture.DateTime.prototype = {
	patternTimeShort: null
	,patternTime: null
	,patternSortable: null
	,patternUniversal: null
	,patternDateTime: null
	,patternDateRfc: null
	,patternDateShort: null
	,patternDate: null
	,patternMonthDay: null
	,patternYearMonth: null
	,firstWeekDay: null
	,separatorTime: null
	,separatorDate: null
	,pm: null
	,am: null
	,shortDays: null
	,abbrDays: null
	,days: null
	,abbrMonths: null
	,months: null
	,__class__: thx.culture.DateTime
}
thx.culture.Number = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
};
$hxClasses["thx.culture.Number"] = thx.culture.Number;
thx.culture.Number.__name__ = ["thx","culture","Number"];
thx.culture.Number.create = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	return new thx.culture.Number(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive);
}
thx.culture.Number.createFromObject = function(ob) {
	return new thx.culture.Number(ob.decimals,ob.decimalsSeparator,ob.groups,ob.groupsSeparator,ob.patternNegative,ob.patternPositive);
}
thx.culture.Number.prototype = {
	patternPositive: null
	,patternNegative: null
	,groupsSeparator: null
	,groups: null
	,decimalsSeparator: null
	,decimals: null
	,__class__: thx.culture.Number
}
thx.culture.Culture = function(name,$native,english,iso2,iso3,pluralRule,language,date,englishCurrency,nativeCurrency,currencySymbol,currencyIso,englishRegion,nativeRegion,isMetric,digits,signNeg,signPos,symbolNaN,symbolPercent,symbolPermille,symbolNegInf,symbolPosInf,number,currency,percent) {
	thx.culture.Domain.call(this,name,pluralRule);
	this["native"] = $native;
	this.english = english;
	this.iso2 = iso2;
	this.iso3 = iso3;
	this.language = language;
	this.date = date;
	this.englishCurrency = englishCurrency;
	this.nativeCurrency = nativeCurrency;
	this.currencySymbol = currencySymbol;
	this.currencyIso = currencyIso;
	this.englishRegion = englishRegion;
	this.nativeRegion = nativeRegion;
	this.isMetric = isMetric;
	this.digits = digits;
	this.signNeg = signNeg;
	this.signPos = signPos;
	this.symbolNaN = symbolNaN;
	this.symbolPercent = symbolPercent;
	this.symbolPermille = symbolPermille;
	this.symbolNegInf = symbolNegInf;
	this.symbolPosInf = symbolPosInf;
	this.number = number;
	this.currency = currency;
	this.percent = percent;
	thx.culture.Culture.register(this);
};
$hxClasses["thx.culture.Culture"] = thx.culture.Culture;
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.create = function(name,$native,english,iso2,iso3,pluralRule,language,date,englishCurrency,nativeCurrency,currencySymbol,currencyIso,englishRegion,nativeRegion,isMetric,digits,signNeg,signPos,symbolNaN,symbolPercent,symbolPermille,symbolNegInf,symbolPosInf,number,currency,percent) {
	return new thx.culture.Culture(name,$native,english,iso2,iso3,pluralRule,language,date,englishCurrency,nativeCurrency,currencySymbol,currencyIso,englishRegion,nativeRegion,isMetric,digits,signNeg,signPos,symbolNaN,symbolPercent,symbolPermille,symbolNegInf,symbolPosInf,number,currency,percent);
}
thx.culture.Culture.createFromObject = function(ob) {
	return new thx.culture.Culture(ob.name,ob["native"],ob.english,ob.iso2,ob.iso3,ob.pluralRule,thx.culture.Language.createFromObject(ob.language),thx.culture.DateTime.createFromObject(ob.date),ob.englishCurrency,ob.nativeCurrency,ob.currencySymbol,ob.currencyIso,ob.englishRegion,ob.nativeRegion,ob.isMetric,ob.digits,ob.signNeg,ob.signPos,ob.symbolNaN,ob.symbolPercent,ob.symbolPermille,ob.symbolNegInf,ob.symbolPosInf,thx.culture.Number.createFromObject(ob.number),thx.culture.Number.createFromObject(ob.currency),thx.culture.Number.createFromObject(ob.percent));
}
thx.culture.Culture.register = function(culture) {
	thx.culture.Culture.cultures.set(thx.culture.Culture.getNativeKey(culture["native"]),culture);
	thx.culture.Culture.cultures.set(thx.culture.Culture.getNameKey(culture.name),culture);
	thx.culture.Culture.cultures.set(thx.culture.Culture.getIso2Key(culture.iso2),culture);
	thx.culture.Culture.cultures.set(thx.culture.Culture.getIso3Key(culture.iso3),culture);
	thx.culture.Language.register(culture.language);
}
thx.culture.Culture.getByName = function(name,alt) {
	return thx.culture.Culture.cultures.exists(thx.culture.Culture.getNameKey(name))?thx.culture.Culture.cultures.get(thx.culture.Culture.getNameKey(name)):alt == null?thx.culture.Culture.invariant:alt;
}
thx.culture.Culture.getByNativeName = function(name,alt) {
	return thx.culture.Culture.cultures.exists(thx.culture.Culture.getNativeKey(name))?thx.culture.Culture.cultures.get(thx.culture.Culture.getNativeKey(name)):alt == null?thx.culture.Culture.invariant:alt;
}
thx.culture.Culture.getByIso2 = function(name,alt) {
	return thx.culture.Culture.cultures.exists(thx.culture.Culture.getIso2Key(name))?thx.culture.Culture.cultures.get(thx.culture.Culture.getIso2Key(name)):alt == null?thx.culture.Culture.invariant:alt;
}
thx.culture.Culture.getByIso3 = function(name,alt) {
	return thx.culture.Culture.cultures.exists(thx.culture.Culture.getIso3Key(name))?thx.culture.Culture.cultures.get(thx.culture.Culture.getIso3Key(name)):alt == null?thx.culture.Culture.invariant:alt;
}
thx.culture.Culture.getNativeKey = function(key) {
	return "NATIVE:" + key;
}
thx.culture.Culture.getNameKey = function(key) {
	return "NAME:" + key;
}
thx.culture.Culture.getIso2Key = function(key) {
	return "ISO2:" + key;
}
thx.culture.Culture.getIso3Key = function(key) {
	return "ISO3:" + key;
}
thx.culture.Culture.__super__ = thx.culture.Domain;
thx.culture.Culture.prototype = $extend(thx.culture.Domain.prototype,{
	toString: function() {
		return this["native"] + " (" + this.english + ")";
	}
	,percent: null
	,currency: null
	,number: null
	,symbolPosInf: null
	,symbolNegInf: null
	,symbolPermille: null
	,symbolPercent: null
	,symbolNaN: null
	,signPos: null
	,signNeg: null
	,digits: null
	,isMetric: null
	,nativeRegion: null
	,englishRegion: null
	,currencyIso: null
	,currencySymbol: null
	,nativeCurrency: null
	,englishCurrency: null
	,date: null
	,language: null
	,iso3: null
	,iso2: null
	,english: null
	,'native': null
	,__class__: thx.culture.Culture
});
var App = function() { }
$hxClasses["App"] = App;
App.__name__ = ["App"];
App.main = function() {
	var trans = new thx.translation.Translation(), locale = new cocoon.i18n.Locale(App.en,trans);
	trans.addDomain(App.en);
	trans.addDomain(App.it);
	trans.addSingular("full name","nome completo",App.it.name);
	trans.addSingular("score","punteggio",App.it.name);
	var manager = new cocoon.ModuleManager();
	manager.injector.mapSingletonOf(cocoon.log.ILogger,cocoon.log.ConsoleLogger);
	manager.injector.mapValue(String,"cocoon","api_field");
	manager.injector.mapValue(cocoon.i18n.Locale,locale);
	manager.register(cocoon.module.JavaScriptAPIModule);
	manager.register(cocoon.module.JavaScriptErrorInterceptModule);
	manager.register(cocoon.module.LogModule);
	manager.register(cocoon.module.VersionModule);
	manager.communicator.queue.queue(new cocoon.message.LogMessage("hello Debug!",cocoon.message.LogType.Debug,null,{ fileName : "App.hx", lineNumber : 35, className : "App", methodName : "main"}));
	manager.communicator.queue.queue(new cocoon.message.LogMessage("hello Error!",cocoon.message.LogType.Error,null,{ fileName : "App.hx", lineNumber : 36, className : "App", methodName : "main"}));
	manager.communicator.queue.queue(new cocoon.message.LogMessage("hello Info!",cocoon.message.LogType.Info,null,{ fileName : "App.hx", lineNumber : 37, className : "App", methodName : "main"}));
	manager.communicator.queue.queue(new cocoon.message.LogMessage("hello Log!",cocoon.message.LogType.Log,null,{ fileName : "App.hx", lineNumber : 38, className : "App", methodName : "main"}));
	manager.communicator.queue.queue(new cocoon.message.LogMessage("hello Warning!",cocoon.message.LogType.Warning,null,{ fileName : "App.hx", lineNumber : 39, className : "App", methodName : "main"}));
	manager.register(SampleModule);
}
var cocoon = {}
cocoon.Module = function() {
};
$hxClasses["cocoon.Module"] = cocoon.Module;
cocoon.Module.__name__ = ["cocoon","Module"];
cocoon.Module.prototype = {
	disconnect: function() {
	}
	,connect: function() {
	}
	,getName: function() {
		return Type.getClassName(Type.getClass(this));
	}
	,injector: null
	,communicator: null
	,__class__: cocoon.Module
}
var SampleModule = function() {
	cocoon.Module.call(this);
};
$hxClasses["SampleModule"] = SampleModule;
SampleModule.__name__ = ["SampleModule"];
SampleModule.__super__ = cocoon.Module;
SampleModule.prototype = $extend(cocoon.Module.prototype,{
	disconnect: function() {
		this.view.teardown();
	}
	,connect: function() {
		var _g = this;
		var model = new SampleModel();
		this.view = new SampleView(model,this.locale);
		haxe.Timer.delay((function(f,a1,a2) {
			return function() {
				return f(a1,a2);
			};
		})(($_=this.view,$bind($_,$_.set)),"name","Why?"),500);
		haxe.Timer.delay((function(f1,a11,a21) {
			return function() {
				return f1(a11,a21);
			};
		})(($_=this.view,$bind($_,$_.set)),"name","Franco"),1000);
		haxe.Timer.delay((function(f2,a12,a22) {
			return function() {
				return f2(a12,a22);
			};
		})(($_=this.view,$bind($_,$_.set)),"score",77.5),750);
		haxe.Timer.delay((function(f3,a13,a23) {
			return function() {
				return f3(a13,a23);
			};
		})(($_=this.view,$bind($_,$_.set)),"score",10334859.33),1500);
		haxe.Timer.delay(function() {
			_g.locale.set_culture(App.it);
		},2000);
		haxe.Timer.delay((function(f4,a14) {
			return function() {
				return f4(a14);
			};
		})(($_=this.injector.getInstance(cocoon.ModuleManager),$bind($_,$_.unregister)),SampleModule),5000);
	}
	,locale: null
	,view: null
	,__class__: SampleModule
});
var ractive = {}
ractive.View = function(options) {
	if(null == options.template) options.template = this.getTemplate();
	this.ractive = new Ractive(options);
	this.nodes = new thx.core.AnonymousMap(this.ractive.nodes);
	this.partials = new thx.core.AnonymousMap(this.ractive.partials);
	this.transitions = new thx.core.AnonymousMap(this.ractive.transitions);
};
$hxClasses["ractive.View"] = ractive.View;
ractive.View.__name__ = ["ractive","View"];
ractive.View.prototype = {
	observeMany: function(map,options) {
		return this.ractive.observe(map,options);
	}
	,observe: function(keypath,complete,options) {
		return this.ractive.observe(keypath,complete,options);
	}
	,teardown: function(complete) {
		this.ractive.teardown(complete);
	}
	,update: function(keypath,complete) {
		this.ractive.update(keypath,complete);
	}
	,fire: function(eventName,payload) {
		this.ractive.fire(eventName,payload);
	}
	,animateMany: function(values,options) {
		this.ractive.animate(values,options);
	}
	,animate: function(keypath,value,options) {
		this.ractive.animate(keypath,value,options);
	}
	,setMany: function(values,complete) {
		this.ractive.set(values,complete);
	}
	,set: function(keypath,value,complete) {
		this.ractive.set(keypath,value,complete);
	}
	,get: function(field) {
		return this.ractive.get(field);
	}
	,off: function(eventName,handler) {
		this.ractive.off(eventName,handler);
	}
	,on: function(eventName,handler) {
		return this.ractive.on(eventName,handler);
	}
	,set_data: function(v) {
		this.ractive.data = v;
		this.ractive.update();
		return v;
	}
	,get_data: function() {
		return this.ractive.data;
	}
	,getTemplate: function() {
		var name = Type.getClassName(Type.getClass(this)), path = (function() {
			var temp = name.split(".");
			temp[temp.length - 1] = temp[temp.length - 1].toLowerCase() + ".html";
			return temp.join(".");
		})();
		return (function($this) {
			var $r;
			throw "no template for " + name + ": create a file " + path;
			return $r;
		}(this));
	}
	,transitions: null
	,partials: null
	,nodes: null
	,ractive: null
	,__class__: ractive.View
	,__properties__: {set_data:"set_data",get_data:"get_data"}
}
cocoon.view = {}
cocoon.view.LocalizedView = function(el,locale,data) {
	this.locale = locale;
	ractive.View.call(this,{ el : el, data : data, template : "{{#data}}" + this.getTemplate() + "{{/data}}"});
	locale.onchange.on({ fun : $bind(this,this.updateLocalization), arity : 0});
	this.updateLocalization();
};
$hxClasses["cocoon.view.LocalizedView"] = cocoon.view.LocalizedView;
cocoon.view.LocalizedView.__name__ = ["cocoon","view","LocalizedView"];
cocoon.view.LocalizedView.k = function(keypath) {
	return "data." + keypath;
}
cocoon.view.LocalizedView.__super__ = ractive.View;
cocoon.view.LocalizedView.prototype = $extend(ractive.View.prototype,{
	observeMany: function(map,options) {
		return ractive.View.prototype.observeMany.call(this,{ data : map},options);
	}
	,observe: function(keypath,complete,options) {
		return ractive.View.prototype.observe.call(this,cocoon.view.LocalizedView.k(keypath),complete,options);
	}
	,update: function(keypath,complete) {
		ractive.View.prototype.update.call(this,cocoon.view.LocalizedView.k(keypath),complete);
	}
	,animateMany: function(values,options) {
		ractive.View.prototype.animateMany.call(this,{ data : values},options);
	}
	,animate: function(keypath,value,options) {
		ractive.View.prototype.animate.call(this,cocoon.view.LocalizedView.k(keypath),value,options);
	}
	,setMany: function(values,complete) {
		ractive.View.prototype.setMany.call(this,{ data : values},complete);
	}
	,set: function(keypath,value,complete) {
		console.log(cocoon.view.LocalizedView.k(keypath));
		console.log(keypath);
		console.log(value);
		ractive.View.prototype.set.call(this,cocoon.view.LocalizedView.k(keypath),value,complete);
	}
	,get: function(keypath) {
		return ractive.View.prototype.get.call(this,cocoon.view.LocalizedView.k(keypath));
	}
	,set_data: function(v) {
		this.ractive.data.data = v;
		ractive.View.prototype.update.call(this,"data");
		return v;
	}
	,get_data: function() {
		return this.ractive.data.data;
	}
	,updateLocalization: function() {
		var _g = this;
		ractive.View.prototype.set.call(this,"_",function(v) {
			return _g.locale.singular(v);
		});
		ractive.View.prototype.set.call(this,"__",function(s,p,q) {
			return _g.locale.plural(s,p,q);
		});
		ractive.View.prototype.set.call(this,"_f",function(pattern) {
			var args = Array.prototype.slice.call(arguments, 1);
			return _g.locale.format(pattern,args);
		});
	}
	,locale: null
	,__class__: cocoon.view.LocalizedView
});
var SampleView = function(data,locale) {
	var el = js.Browser.document.getElementById("main");
	cocoon.view.LocalizedView.call(this,el,locale,data);
};
$hxClasses["SampleView"] = SampleView;
SampleView.__name__ = ["SampleView"];
SampleView.__super__ = cocoon.view.LocalizedView;
SampleView.prototype = $extend(cocoon.view.LocalizedView.prototype,{
	getTemplate: function() {
		return "{{_(\"full name\")}}: {{name}}, {{_(\"score\")}}: {{_f(\"{0:C}\", .score)}}\n<button class=\"uk-button\">{{name}}</button>";
	}
	,__class__: SampleView
});
var SampleModel = function() {
};
$hxClasses["SampleModel"] = SampleModel;
SampleModel.__name__ = ["SampleModel"];
SampleModel.prototype = {
	upName: function() {
		return "Franco".toUpperCase();
	}
	,score: null
	,name: null
	,__class__: SampleModel
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	map: function(s,f) {
		var offset = 0;
		var buf = new StringBuf();
		do {
			if(offset >= s.length) break; else if(!this.matchSub(s,offset)) {
				buf.b += Std.string(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf.b += Std.string(HxOverrides.substr(s,offset,p.pos - offset));
			buf.b += Std.string(f(this));
			if(p.len == 0) {
				buf.b += Std.string(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else offset = p.pos + p.len;
		} while(this.r.global);
		if(!this.r.global && offset > 0 && offset < s.length) buf.b += Std.string(HxOverrides.substr(s,offset,null));
		return buf.b;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		return this.r.global?(function($this) {
			var $r;
			$this.r.lastIndex = pos;
			$this.r.m = $this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = $this.r.m != null;
			if(b) $this.r.s = s;
			$r = b;
			return $r;
		}(this)):(function($this) {
			var $r;
			var b = $this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b) {
				$this.r.s = s;
				$this.r.m.index += pos;
			}
			$r = b;
			return $r;
		}(this));
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,r: null
	,__class__: EReg
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var Lambda = function() { }
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
}
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.random = function(x) {
	return x <= 0?0:Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
}
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
var ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
}
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
cocoon.Communicator = function() {
	this.provider = new thx.react.Provider();
	this.responder = new thx.react.Responder();
	this.event = new thx.react.Dispatcher();
	this.value = new thx.react.ValueDispatcher();
	this.queue = new thx.react.Buffer();
};
$hxClasses["cocoon.Communicator"] = cocoon.Communicator;
cocoon.Communicator.__name__ = ["cocoon","Communicator"];
cocoon.Communicator.prototype = {
	queue: null
	,value: null
	,event: null
	,responder: null
	,provider: null
	,__class__: cocoon.Communicator
}
cocoon.ModuleManager = function() {
	this.modules = new haxe.ds.StringMap();
	this.injector = new minject.AsyncInjector();
	this.communicator = new cocoon.Communicator();
	this.injector.mapValue(minject.AsyncInjector,this.injector);
	this.injector.mapValue(cocoon.Communicator,this.communicator);
	this.injector.mapValue(cocoon.ModuleManager,this);
};
$hxClasses["cocoon.ModuleManager"] = cocoon.ModuleManager;
cocoon.ModuleManager.__name__ = ["cocoon","ModuleManager"];
cocoon.ModuleManager.prototype = {
	removeModule: function(module) {
		if(this.modules.remove(Type.getClassName(Type.getClass(module)))) {
			module.disconnect();
			this.communicator.event.binder.dispatch("cocoon.ModulesChange Dynamic",[new cocoon.ModulesChange($bind(this,this.getModules))]);
		}
	}
	,addModule: function(module) {
		this.modules.set(Type.getClassName(Type.getClass(module)),module);
		module.connect();
		this.communicator.event.binder.dispatch("cocoon.ModulesChange Dynamic",[new cocoon.ModulesChange($bind(this,this.getModules))]);
	}
	,unregister: function(moduleClass) {
		if(!this.modules.exists(Type.getClassName(moduleClass))) throw "module is not registered";
		var module = this.modules.get(Type.getClassName(moduleClass));
		if(null == module) this.modules.remove(Type.getClassName(moduleClass)); else this.removeModule(module);
		return this;
	}
	,register: function(moduleClass) {
		if(this.modules.exists(Type.getClassName(moduleClass))) throw "module already registered";
		this.modules.set(Type.getClassName(moduleClass),null);
		this.injector.instantiateAsync(moduleClass,$bind(this,this.addModule));
		return this;
	}
	,getModules: function() {
		var _g = this;
		return thx.core.Iterators.map(this.modules.keys(),function(type) {
			var t = Type.resolveClass(type);
			return { type : t, instance : _g.modules.get(type)};
		});
	}
	,modules: null
	,injector: null
	,communicator: null
	,__class__: cocoon.ModuleManager
}
cocoon.ModulesChange = function(feeder) {
	this.feeder = (function() {
		var values = null;
		return function() {
			if(null == values) values = feeder();
			return values;
		};
	})();
};
$hxClasses["cocoon.ModulesChange"] = cocoon.ModulesChange;
cocoon.ModulesChange.__name__ = ["cocoon","ModulesChange"];
cocoon.ModulesChange.prototype = {
	toString: function() {
		return this.get_modules().length == 0?"no registered modules":this.get_modules().map(function(module) {
			return Type.getClassName(module.type) + (" (" + (null == module.instance?"not ":"") + "instantiated)");
		}).join(",\n");
	}
	,get_modules: function() {
		return this.feeder();
	}
	,feeder: null
	,modules: null
	,__class__: cocoon.ModulesChange
	,__properties__: {get_modules:"get_modules"}
}
cocoon.compile = {}
cocoon.compile.GitVersion = function() { }
$hxClasses["cocoon.compile.GitVersion"] = cocoon.compile.GitVersion;
cocoon.compile.GitVersion.__name__ = ["cocoon","compile","GitVersion"];
cocoon.compile.ValueClassImpl = function() { }
$hxClasses["cocoon.compile.ValueClassImpl"] = cocoon.compile.ValueClassImpl;
cocoon.compile.ValueClassImpl.__name__ = ["cocoon","compile","ValueClassImpl"];
cocoon.i18n = {}
cocoon.i18n.Locale = function(culture,translation) {
	this.onchange = new thx.react.Signal0();
	this.translation = translation;
	this.set_culture(culture);
};
$hxClasses["cocoon.i18n.Locale"] = cocoon.i18n.Locale;
cocoon.i18n.Locale.__name__ = ["cocoon","i18n","Locale"];
cocoon.i18n.Locale.prototype = {
	set_culture: function(culture) {
		this.culture = culture;
		this.translation.set_domain(culture);
		this.onchange.trigger();
		return culture;
	}
	,format: function(pattern,params) {
		return thx.culture.Format.format(this.singular(pattern),params,this.culture);
	}
	,plural: function(ids,idp,quantifier) {
		return this.translation.plural(ids,idp,quantifier);
	}
	,singular: function(id) {
		return this.translation.singular(id);
	}
	,onchange: null
	,translation: null
	,culture: null
	,__class__: cocoon.i18n.Locale
	,__properties__: {set_culture:"set_culture"}
}
cocoon.log = {}
cocoon.log.ILogger = function() { }
$hxClasses["cocoon.log.ILogger"] = cocoon.log.ILogger;
cocoon.log.ILogger.__name__ = ["cocoon","log","ILogger"];
cocoon.log.ILogger.prototype = {
	log: null
	,__class__: cocoon.log.ILogger
}
cocoon.log.ConsoleLogger = function() {
};
$hxClasses["cocoon.log.ConsoleLogger"] = cocoon.log.ConsoleLogger;
cocoon.log.ConsoleLogger.__name__ = ["cocoon","log","ConsoleLogger"];
cocoon.log.ConsoleLogger.__interfaces__ = [cocoon.log.ILogger];
cocoon.log.ConsoleLogger.formatTime = function(date) {
	var pad = function(i) {
		return i < 10?"0" + i:"" + i;
	};
	return pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
}
cocoon.log.ConsoleLogger.prototype = {
	log: function(msg) {
		var f = function(t) {
			switch( (msg.type)[1] ) {
			case 0:
				cocoon.log.ConsoleLogger.api.debug(t);
				break;
			case 1:
				cocoon.log.ConsoleLogger.api.error(t);
				break;
			case 2:
				cocoon.log.ConsoleLogger.api.info(t);
				break;
			case 3:
				cocoon.log.ConsoleLogger.api.log(t);
				break;
			case 4:
				cocoon.log.ConsoleLogger.api.warn(t);
				break;
			}
		};
		var pos = null == msg.pos?"":"" + msg.pos.lineNumber + ":" + msg.pos.className + "." + msg.pos.methodName + "() ", time = cocoon.log.ConsoleLogger.formatTime(msg.time);
		f("" + pos + "[" + time + "]\n" + msg.message);
	}
	,__class__: cocoon.log.ConsoleLogger
}
cocoon.message = {}
cocoon.message.ApplicationVersion = function(version) {
	this.version = version;
};
$hxClasses["cocoon.message.ApplicationVersion"] = cocoon.message.ApplicationVersion;
cocoon.message.ApplicationVersion.__name__ = ["cocoon","message","ApplicationVersion"];
cocoon.message.ApplicationVersion.prototype = {
	toString: function() {
		var __b = [];
		__b.push("version" + " : " + this.version);
		return "ApplicationVersion" + (__b.length == 0?"":" {" + __b.join(",") + "}");
	}
	,version: null
	,__class__: cocoon.message.ApplicationVersion
}
cocoon.message.JavaScriptAPI = function(api) {
	this.api = api;
};
$hxClasses["cocoon.message.JavaScriptAPI"] = cocoon.message.JavaScriptAPI;
cocoon.message.JavaScriptAPI.__name__ = ["cocoon","message","JavaScriptAPI"];
cocoon.message.JavaScriptAPI.prototype = {
	toString: function() {
		var __b = [];
		__b.push("api" + " : " + Std.string(this.api));
		return "JavaScriptAPI" + (__b.length == 0?"":" {" + __b.join(",") + "}");
	}
	,api: null
	,__class__: cocoon.message.JavaScriptAPI
}
cocoon.message.LogMessage = function(message,type,data,pos) {
	this.message = message;
	this.type = null == type?cocoon.message.LogType.Error:type;
	this.time = new Date();
	this.data = data;
	this.pos = pos;
};
$hxClasses["cocoon.message.LogMessage"] = cocoon.message.LogMessage;
cocoon.message.LogMessage.__name__ = ["cocoon","message","LogMessage"];
cocoon.message.LogMessage.prototype = {
	toString: function() {
		return "" + Std.string(this.type) + ": " + this.message.toString() + " (" + Std.string(this.time) + ")";
	}
	,data: null
	,pos: null
	,time: null
	,type: null
	,message: null
	,__class__: cocoon.message.LogMessage
}
cocoon.message.LogType = { __ename__ : ["cocoon","message","LogType"], __constructs__ : ["Debug","Error","Info","Log","Warning"] }
cocoon.message.LogType.Debug = ["Debug",0];
cocoon.message.LogType.Debug.toString = $estr;
cocoon.message.LogType.Debug.__enum__ = cocoon.message.LogType;
cocoon.message.LogType.Error = ["Error",1];
cocoon.message.LogType.Error.toString = $estr;
cocoon.message.LogType.Error.__enum__ = cocoon.message.LogType;
cocoon.message.LogType.Info = ["Info",2];
cocoon.message.LogType.Info.toString = $estr;
cocoon.message.LogType.Info.__enum__ = cocoon.message.LogType;
cocoon.message.LogType.Log = ["Log",3];
cocoon.message.LogType.Log.toString = $estr;
cocoon.message.LogType.Log.__enum__ = cocoon.message.LogType;
cocoon.message.LogType.Warning = ["Warning",4];
cocoon.message.LogType.Warning.toString = $estr;
cocoon.message.LogType.Warning.__enum__ = cocoon.message.LogType;
cocoon.module = {}
cocoon.module.JavaScriptAPIModule = function() {
	cocoon.Module.call(this);
};
$hxClasses["cocoon.module.JavaScriptAPIModule"] = cocoon.module.JavaScriptAPIModule;
cocoon.module.JavaScriptAPIModule.__name__ = ["cocoon","module","JavaScriptAPIModule"];
cocoon.module.JavaScriptAPIModule.__super__ = cocoon.Module;
cocoon.module.JavaScriptAPIModule.prototype = $extend(cocoon.Module.prototype,{
	connect: function() {
		var api = Reflect.field(js.Browser.window,this.api_field);
		if(null == api) js.Browser.window[this.api_field] = api = { };
		this.injector.mapValue(cocoon.message.JavaScriptAPI,new cocoon.message.JavaScriptAPI(api));
	}
	,api_field: null
	,__class__: cocoon.module.JavaScriptAPIModule
});
cocoon.module.JavaScriptErrorInterceptModule = function() {
	cocoon.Module.call(this);
};
$hxClasses["cocoon.module.JavaScriptErrorInterceptModule"] = cocoon.module.JavaScriptErrorInterceptModule;
cocoon.module.JavaScriptErrorInterceptModule.__name__ = ["cocoon","module","JavaScriptErrorInterceptModule"];
cocoon.module.JavaScriptErrorInterceptModule.__super__ = cocoon.Module;
cocoon.module.JavaScriptErrorInterceptModule.prototype = $extend(cocoon.Module.prototype,{
	connect: function() {
		var _g = this;
		js.Browser.window.onerror = function(msg,url,line) {
			var message = "" + msg + " <small>(line " + line + ") at " + url + "</small>";
			_g.communicator.queue.queue(new cocoon.message.LogMessage(message,cocoon.message.LogType.Error,null,{ fileName : "JavaScriptErrorInterceptModule.hx", lineNumber : 13, className : "cocoon.module.JavaScriptErrorInterceptModule", methodName : "connect"}));
		};
	}
	,__class__: cocoon.module.JavaScriptErrorInterceptModule
});
cocoon.module.LogModule = function() {
	cocoon.Module.call(this);
};
$hxClasses["cocoon.module.LogModule"] = cocoon.module.LogModule;
cocoon.module.LogModule.__name__ = ["cocoon","module","LogModule"];
cocoon.module.LogModule.__super__ = cocoon.Module;
cocoon.module.LogModule.prototype = $extend(cocoon.Module.prototype,{
	connect: function() {
		this.communicator.queue.consumeImpl("cocoon.message.LogMessage",($_=this.logger,$bind($_,$_.log)));
	}
	,logger: null
	,__class__: cocoon.module.LogModule
});
cocoon.module.VersionModule = function() {
	cocoon.Module.call(this);
};
$hxClasses["cocoon.module.VersionModule"] = cocoon.module.VersionModule;
cocoon.module.VersionModule.__name__ = ["cocoon","module","VersionModule"];
cocoon.module.VersionModule.__super__ = cocoon.Module;
cocoon.module.VersionModule.prototype = $extend(cocoon.Module.prototype,{
	connect: function() {
		var version = "v.0.0.0-1-gaf2d472-dirty";
		this.injector.mapValue(cocoon.message.ApplicationVersion,new cocoon.message.ApplicationVersion(version));
		this.injector.getInstanceAsync(cocoon.message.JavaScriptAPI,null,function(jsapi) {
			jsapi.api.version = version;
		});
	}
	,__class__: cocoon.module.VersionModule
});
var haxe = {}
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.prototype = {
	run: function() {
		console.log("run");
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,id: null
	,__class__: haxe.Timer
}
haxe.ds = {}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,h: null
	,__class__: haxe.ds.IntMap
}
haxe.ds.Option = { __ename__ : ["haxe","ds","Option"], __constructs__ : ["Some","None"] }
haxe.ds.Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = haxe.ds.Option; $x.toString = $estr; return $x; }
haxe.ds.Option.None = ["None",1];
haxe.ds.Option.None.toString = $estr;
haxe.ds.Option.None.__enum__ = haxe.ds.Option;
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,h: null
	,__class__: haxe.ds.StringMap
}
haxe.rtti = {}
haxe.rtti.Meta = function() { }
$hxClasses["haxe.rtti.Meta"] = haxe.rtti.Meta;
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.obj == null?{ }:meta.obj;
}
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.fields == null?{ }:meta.fields;
}
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
var mcore = {}
mcore.exception = {}
mcore.exception.Exception = function(message,cause,info) {
	if(message == null) message = "";
	this.name = Type.getClassName(Type.getClass(this));
	this.message = message;
	this.cause = cause;
	this.info = info;
};
$hxClasses["mcore.exception.Exception"] = mcore.exception.Exception;
mcore.exception.Exception.__name__ = ["mcore","exception","Exception"];
mcore.exception.Exception.getStackTrace = function(source) {
	return "getStackTrace not supported in js, see: https://groups.google.com/forum/#!searchin/haxelang/exceptionStack$20js/haxelang/oVyR-Bx-yM0/zck4VJFwzlUJ";
	var s = "";
	if(s != "") return s;
	var stack = haxe.CallStack.exceptionStack();
	while(stack.length > 0) {
		var _g = stack.shift();
		var $e = (_g);
		switch( $e[1] ) {
		case 2:
			var line = $e[4], file = $e[3], _g_eFilePos_0 = $e[2];
			s += "\tat " + file + " (" + line + ")\n";
			break;
		case 1:
			break;
		case 3:
			var method = $e[3], classname = $e[2];
			s += "\tat " + classname + "#" + method + "\n";
			break;
		case 4:
			break;
		case 0:
			break;
		}
	}
	return s;
}
mcore.exception.Exception.prototype = {
	toString: function() {
		var str = this.get_name() + ": " + this.get_message();
		if(this.info != null) str += " at " + this.info.className + "#" + this.info.methodName + " (" + this.info.lineNumber + ")";
		if(this.cause != null) str += "\n\t Caused by: " + mcore.exception.Exception.getStackTrace(this.cause);
		return str;
	}
	,info: null
	,cause: null
	,get_message: function() {
		return this.message;
	}
	,message: null
	,get_name: function() {
		return this.name;
	}
	,name: null
	,__class__: mcore.exception.Exception
	,__properties__: {get_name:"get_name",get_message:"get_message"}
}
mcore.exception.ArgumentException = function(message,cause,info) {
	if(message == null) message = "";
	mcore.exception.Exception.call(this,message,cause,info);
};
$hxClasses["mcore.exception.ArgumentException"] = mcore.exception.ArgumentException;
mcore.exception.ArgumentException.__name__ = ["mcore","exception","ArgumentException"];
mcore.exception.ArgumentException.__super__ = mcore.exception.Exception;
mcore.exception.ArgumentException.prototype = $extend(mcore.exception.Exception.prototype,{
	__class__: mcore.exception.ArgumentException
});
mcore.util = {}
mcore.util.Arrays = function() { }
$hxClasses["mcore.util.Arrays"] = mcore.util.Arrays;
mcore.util.Arrays.__name__ = ["mcore","util","Arrays"];
mcore.util.Arrays.toString = function(source) {
	return source.toString();
}
mcore.util.Arrays.shuffle = function(source) {
	var copy = source.slice();
	var shuffled = [];
	while(copy.length > 0) shuffled.push(copy.splice(Std.random(copy.length),1)[0]);
	return shuffled;
}
mcore.util.Arrays.lastItem = function(source) {
	return source[source.length - 1];
}
mcore.util.Reflection = function() { }
$hxClasses["mcore.util.Reflection"] = mcore.util.Reflection;
mcore.util.Reflection.__name__ = ["mcore","util","Reflection"];
mcore.util.Reflection.setProperty = function(object,property,value) {
	Reflect.setProperty(object,property,value);
	return value;
}
mcore.util.Reflection.hasProperty = function(object,property) {
	var properties = Type.getInstanceFields(Type.getClass(object));
	return Lambda.has(properties,property);
}
mcore.util.Reflection.getFields = function(object) {
	return (function($this) {
		var $r;
		var _g = Type["typeof"](object);
		$r = (function($this) {
			var $r;
			var $e = (_g);
			switch( $e[1] ) {
			case 6:
				var c = $e[2];
				$r = Type.getInstanceFields(c);
				break;
			default:
				$r = Reflect.fields(object);
			}
			return $r;
		}($this));
		return $r;
	}(this));
}
mcore.util.Reflection.here = function(info) {
	return info;
}
mcore.util.Reflection.callMethod = function(o,func,args) {
	if(args == null) args = [];
	try {
		return func.apply(o,args);
	} catch( e ) {
		throw new mcore.exception.Exception("Error calling method " + Type.getClassName(Type.getClass(o)) + "." + Std.string(func) + "(" + args.toString() + ")",e,{ fileName : "Reflection.hx", lineNumber : 111, className : "mcore.util.Reflection", methodName : "callMethod"});
	}
}
mcore.util.Types = function() { }
$hxClasses["mcore.util.Types"] = mcore.util.Types;
mcore.util.Types.__name__ = ["mcore","util","Types"];
mcore.util.Types.isSubClassOf = function(object,type) {
	return js.Boot.__instanceof(object,type) && Type.getClass(object) != type;
}
mcore.util.Types.createInstance = function(forClass,args) {
	if(args == null) args = [];
	try {
		return Type.createInstance(forClass,args);
	} catch( e ) {
		throw new mcore.exception.Exception("Error creating instance of " + Type.getClassName(forClass) + "(" + args.toString() + ")",e,{ fileName : "Types.hx", lineNumber : 65, className : "mcore.util.Types", methodName : "createInstance"});
	}
}
var mdata = {}
mdata.Dictionary = function(weakKeys) {
	if(weakKeys == null) weakKeys = false;
	this.weakKeys = weakKeys;
	this.clear();
};
$hxClasses["mdata.Dictionary"] = mdata.Dictionary;
mdata.Dictionary.__name__ = ["mdata","Dictionary"];
mdata.Dictionary.prototype = {
	toString: function() {
		var s = "{";
		var $it0 = this.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var value = this.get(key);
			var k = js.Boot.__instanceof(key,Array)?"[" + key.toString() + "]":Std.string(key);
			var v = js.Boot.__instanceof(value,Array)?"[" + value.toString() + "]":Std.string(value);
			s += k + " => " + v + ", ";
		}
		if(s.length > 2) s = HxOverrides.substr(s,0,s.length - 2);
		return s + "}";
	}
	,iterator: function() {
		return HxOverrides.iter(this._values);
	}
	,keys: function() {
		return HxOverrides.iter(this._keys);
	}
	,clear: function() {
		this._keys = [];
		this._values = [];
	}
	,exists: function(key) {
		var _g = 0, _g1 = this._keys;
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			if(k == key) return true;
		}
		return false;
	}
	,'delete': function(key) {
		this.remove(key);
	}
	,remove: function(key) {
		var _g1 = 0, _g = this._keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._keys[i] == key) {
				this._keys.splice(i,1);
				this._values.splice(i,1);
				return true;
			}
		}
		return false;
	}
	,get: function(key) {
		var _g1 = 0, _g = this._keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._keys[i] == key) return this._values[i];
		}
		return null;
	}
	,set: function(key,value) {
		var _g1 = 0, _g = this._keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._keys[i] == key) {
				this._keys[i] = key;
				this._values[i] = value;
				return;
			}
		}
		this._keys.push(key);
		this._values.push(value);
	}
	,weakKeys: null
	,_values: null
	,_keys: null
	,__class__: mdata.Dictionary
}
var minject = {}
minject.Injector = function() {
	this.injectionConfigs = new haxe.ds.StringMap();
	this.injecteeDescriptions = new minject.ClassHash();
	this.attendedToInjectees = new minject._Injector.InjecteeSet();
};
$hxClasses["minject.Injector"] = minject.Injector;
minject.Injector.__name__ = ["minject","Injector"];
minject.Injector.prototype = {
	getFields: function(type) {
		var meta = { };
		while(type != null) {
			var typeMeta = haxe.rtti.Meta.getFields(type);
			var _g = 0, _g1 = Reflect.fields(typeMeta);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				meta[field] = Reflect.field(typeMeta,field);
			}
			type = Type.getSuperClass(type);
		}
		return meta;
	}
	,getClassName: function(forClass) {
		if(forClass == null) return "Dynamic"; else return Type.getClassName(forClass);
	}
	,set_parentInjector: function(value) {
		if(this.parentInjector != null && value == null) this.attendedToInjectees = new minject._Injector.InjecteeSet();
		this.parentInjector = value;
		if(this.parentInjector != null) this.attendedToInjectees = this.parentInjector.attendedToInjectees;
		return this.parentInjector;
	}
	,getConfigurationForRequest: function(forClass,named,traverseAncestors) {
		if(traverseAncestors == null) traverseAncestors = true;
		var requestName = this.getClassName(forClass) + "#" + named;
		if(!this.injectionConfigs.exists(requestName)) {
			if(traverseAncestors && this.parentInjector != null && this.parentInjector.hasMapping(forClass,named)) return this.getAncestorMapping(forClass,named);
			return null;
		}
		return this.injectionConfigs.get(requestName);
	}
	,getInjectionPoints: function(forClass) {
		var typeMeta = haxe.rtti.Meta.getType(forClass);
		if(typeMeta != null && Reflect.hasField(typeMeta,"interface")) throw "Interfaces can't be used as instantiatable classes.";
		var fieldsMeta = this.getFields(forClass);
		var ctorInjectionPoint = null;
		var injectionPoints = [];
		var postConstructMethodPoints = [];
		var _g = 0, _g1 = Reflect.fields(fieldsMeta);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			var fieldMeta = Reflect.field(fieldsMeta,field);
			var inject = Reflect.hasField(fieldMeta,"inject");
			var post = Reflect.hasField(fieldMeta,"post");
			var type = Reflect.field(fieldMeta,"type");
			var args = Reflect.field(fieldMeta,"args");
			if(field == "_") {
				if(args.length > 0) ctorInjectionPoint = new minject.point.ConstructorInjectionPoint(fieldMeta,forClass,this);
			} else if(Reflect.hasField(fieldMeta,"args")) {
				if(inject) {
					var injectionPoint = new minject.point.MethodInjectionPoint(fieldMeta,this);
					injectionPoints.push(injectionPoint);
				} else if(post) {
					var injectionPoint = new minject.point.PostConstructInjectionPoint(fieldMeta,this);
					postConstructMethodPoints.push(injectionPoint);
				}
			} else if(type != null) {
				var injectionPoint = new minject.point.PropertyInjectionPoint(fieldMeta,this);
				injectionPoints.push(injectionPoint);
			}
		}
		if(postConstructMethodPoints.length > 0) {
			postConstructMethodPoints.sort(function(a,b) {
				return a.order - b.order;
			});
			var _g = 0;
			while(_g < postConstructMethodPoints.length) {
				var point = postConstructMethodPoints[_g];
				++_g;
				injectionPoints.push(point);
			}
		}
		if(ctorInjectionPoint == null) ctorInjectionPoint = new minject.point.NoParamsConstructorInjectionPoint();
		var injecteeDescription = new minject.InjecteeDescription(ctorInjectionPoint,injectionPoints);
		this.injecteeDescriptions.set(forClass,injecteeDescription);
		return injecteeDescription;
	}
	,getAncestorMapping: function(forClass,named) {
		var parent = this.parentInjector;
		while(parent != null) {
			var parentConfig = parent.getConfigurationForRequest(forClass,named,false);
			if(parentConfig != null && parentConfig.hasOwnResponse()) return parentConfig;
			parent = parent.parentInjector;
		}
		return null;
	}
	,createChildInjector: function() {
		var injector = new minject.Injector();
		injector.set_parentInjector(this);
		return injector;
	}
	,getInstance: function(ofClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(ofClass,named);
		if(mapping == null || !mapping.hasResponse(this)) throw "Error while getting mapping response: No mapping defined for class " + this.getClassName(ofClass) + ", named \"" + named + "\"";
		return mapping.getResponse(this);
	}
	,hasMapping: function(forClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(forClass,named);
		if(mapping == null) return false;
		return mapping.hasResponse(this);
	}
	,unmap: function(theClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(theClass,named);
		if(mapping == null) throw "Error while removing an injector mapping: No mapping defined for class " + this.getClassName(theClass) + ", named \"" + named + "\"";
		mapping.setResult(null);
	}
	,instantiate: function(theClass) {
		var injecteeDescription;
		if(this.injecteeDescriptions.exists(theClass)) injecteeDescription = this.injecteeDescriptions.get(theClass); else injecteeDescription = this.getInjectionPoints(theClass);
		var injectionPoint = injecteeDescription.ctor;
		var instance = injectionPoint.applyInjection(theClass,this);
		this.injectInto(instance);
		return instance;
	}
	,injectInto: function(target) {
		if(this.attendedToInjectees.contains(target)) return;
		this.attendedToInjectees.add(target);
		var targetClass = Type.getClass(target);
		var injecteeDescription = null;
		if(this.injecteeDescriptions.exists(targetClass)) injecteeDescription = this.injecteeDescriptions.get(targetClass); else injecteeDescription = this.getInjectionPoints(targetClass);
		if(injecteeDescription == null) return;
		var injectionPoints = injecteeDescription.injectionPoints;
		var length = injectionPoints.length;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			var injectionPoint = injectionPoints[i];
			injectionPoint.applyInjection(target,this);
		}
	}
	,getMapping: function(forClass,named) {
		if(named == null) named = "";
		var requestName = this.getClassName(forClass) + "#" + named;
		if(this.injectionConfigs.exists(requestName)) return this.injectionConfigs.get(requestName);
		var config = new minject.InjectionConfig(forClass,named);
		this.injectionConfigs.set(requestName,config);
		return config;
	}
	,mapRule: function(whenAskedFor,useRule,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectOtherRuleResult(useRule));
		return useRule;
	}
	,mapSingletonOf: function(whenAskedFor,useSingletonOf,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectSingletonResult(useSingletonOf));
		return config;
	}
	,mapSingleton: function(whenAskedFor,named) {
		if(named == null) named = "";
		return this.mapSingletonOf(whenAskedFor,whenAskedFor,named);
	}
	,mapClass: function(whenAskedFor,instantiateClass,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectClassResult(instantiateClass));
		return config;
	}
	,mapValue: function(whenAskedFor,useValue,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectValueResult(useValue));
		return config;
	}
	,injecteeDescriptions: null
	,injectionConfigs: null
	,parentInjector: null
	,attendedToInjectees: null
	,__class__: minject.Injector
	,__properties__: {set_parentInjector:"set_parentInjector"}
}
minject.AsyncInjector = function() {
	minject.Injector.call(this);
	this.binder = new thx.react.Binder();
};
$hxClasses["minject.AsyncInjector"] = minject.AsyncInjector;
minject.AsyncInjector.__name__ = ["minject","AsyncInjector"];
minject.AsyncInjector.__super__ = minject.Injector;
minject.AsyncInjector.prototype = $extend(minject.Injector.prototype,{
	mapRule: function(whenAskedFor,useRule,named) {
		if(named == null) named = "";
		var config = minject.Injector.prototype.mapRule.call(this,whenAskedFor,useRule,named);
		this.binder.dispatch(this.getKey(whenAskedFor,named),[]);
		return config;
	}
	,mapSingletonOf: function(whenAskedFor,useSingletonOf,named) {
		if(named == null) named = "";
		var config = minject.Injector.prototype.mapSingletonOf.call(this,whenAskedFor,useSingletonOf,named);
		this.binder.dispatch(this.getKey(whenAskedFor,named),[]);
		return config;
	}
	,mapClass: function(whenAskedFor,instantiateClass,named) {
		if(named == null) named = "";
		var config = minject.Injector.prototype.mapClass.call(this,whenAskedFor,instantiateClass,named);
		this.binder.dispatch(this.getKey(whenAskedFor,named),[]);
		return config;
	}
	,mapValue: function(whenAskedFor,useValue,named) {
		if(named == null) named = "";
		var config = minject.Injector.prototype.mapValue.call(this,whenAskedFor,useValue,named);
		this.binder.dispatch(this.getKey(whenAskedFor,named),[]);
		return config;
	}
	,getKey: function(type,named) {
		return (named == null?"":named) + Type.getClassName(type);
	}
	,bind: function(type,named,handler) {
		this.binder.bindOne(this.getKey(type,named),{ fun : handler, arity : 0});
	}
	,bindMany: function(pairs,handler) {
		var _g = this;
		var counter = pairs.length;
		pairs.map(function(pair) {
			_g.bind(pair.type,pair.name,function() {
				if(0 == --counter) handler();
			});
		});
	}
	,getInjectIntoRequirements: function(targetClass) {
		var injecteeDescription = null;
		if(this.injecteeDescriptions.exists(targetClass)) injecteeDescription = this.injecteeDescriptions.get(targetClass); else injecteeDescription = this.getInjectionPoints(targetClass);
		if(injecteeDescription == null) return [];
		return injecteeDescription.injectionPoints.map(function(point) {
			var info = js.Boot.__cast(point , minject.point.PropertyInjectionPoint);
			return { type : Type.resolveClass(info.propertyType), name : info.injectionName};
		});
	}
	,getInstantiateRequirements: function(theClass) {
		var injecteeDescription;
		if(this.injecteeDescriptions.exists(theClass)) injecteeDescription = this.injecteeDescriptions.get(theClass); else injecteeDescription = this.getInjectionPoints(theClass);
		var requirements = js.Boot.__instanceof(injecteeDescription.ctor,minject.point.NoParamsConstructorInjectionPoint)?[]:(js.Boot.__cast(injecteeDescription.ctor , minject.point.MethodInjectionPoint))._parameterInjectionConfigs.map(function(info) {
			return { type : Type.resolveClass(info.typeName), name : info.injectionName};
		});
		return requirements.concat(this.getInjectIntoRequirements(theClass));
	}
	,getInjectIntoMissingRequirements: function(theClass) {
		var _g = this;
		return this.getInjectIntoRequirements(theClass).filter(function(pair) {
			return !_g.hasMapping(pair.type,pair.name);
		});
	}
	,getInstantiateMissingRequirements: function(theClass) {
		var _g = this;
		return this.getInstantiateRequirements(theClass).filter(function(pair) {
			return !_g.hasMapping(pair.type,pair.name);
		});
	}
	,canInjectInto: function(target) {
		return this.getInjectIntoMissingRequirements(Type.getClass(target)).length == 0;
	}
	,canInstantiate: function(theClass) {
		return this.getInstantiateMissingRequirements(theClass).length == 0;
	}
	,injectIntoAsync: function(target,callback) {
		var _g = this;
		if(this.canInjectInto(target)) {
			this.injectInto(target);
			callback(target);
		} else this.bindMany(this.getInjectIntoMissingRequirements(Type.getClass(target)),function() {
			_g.injectInto(target);
			callback(target);
		});
	}
	,instantiateAsync: function(theClass,callback) {
		var _g = this;
		if(this.canInstantiate(theClass)) callback(this.instantiate(theClass)); else this.bindMany(this.getInstantiateMissingRequirements(theClass),function() {
			callback(_g.instantiate(theClass));
		});
	}
	,getInstanceAsync: function(theClass,named,callback) {
		var _g = this;
		if(this.hasMapping(theClass,named)) callback(this.getInstance(theClass,named)); else this.bind(theClass,named,function() {
			callback(_g.getInstance(theClass,named));
		});
	}
	,binder: null
	,__class__: minject.AsyncInjector
});
minject.InjectionConfig = function(request,injectionName) {
	this.request = request;
	this.injectionName = injectionName;
};
$hxClasses["minject.InjectionConfig"] = minject.InjectionConfig;
minject.InjectionConfig.__name__ = ["minject","InjectionConfig"];
minject.InjectionConfig.prototype = {
	setInjector: function(injector) {
		this.injector = injector;
	}
	,setResult: function(result) {
		if(this.result != null && result != null) console.log("Warning: Injector already has a rule for type \"" + Type.getClassName(this.request) + "\", named \"" + this.injectionName + "\".\nIf you have overwritten this mapping intentionally " + "you can use \"injector.unmap()\" prior to your replacement " + "mapping in order to avoid seeing this message.");
		this.result = result;
	}
	,hasOwnResponse: function() {
		return this.result != null;
	}
	,hasResponse: function(injector) {
		return this.result != null;
	}
	,getResponse: function(injector) {
		if(this.injector != null) injector = this.injector;
		if(this.result != null) return this.result.getResponse(injector);
		var parentConfig = injector.getAncestorMapping(this.request,this.injectionName);
		if(parentConfig != null) return parentConfig.getResponse(injector);
		return null;
	}
	,result: null
	,injector: null
	,injectionName: null
	,request: null
	,__class__: minject.InjectionConfig
}
minject._Injector = {}
minject._Injector.InjecteeSet = function() {
};
$hxClasses["minject._Injector.InjecteeSet"] = minject._Injector.InjecteeSet;
minject._Injector.InjecteeSet.__name__ = ["minject","_Injector","InjecteeSet"];
minject._Injector.InjecteeSet.prototype = {
	iterator: function() {
		return HxOverrides.iter([]);
	}
	,'delete': function(value) {
		Reflect.deleteField(value,"__injected__");
	}
	,contains: function(value) {
		return value.__injected__ == true;
	}
	,add: function(value) {
		value.__injected__ = true;
	}
	,__class__: minject._Injector.InjecteeSet
}
minject.ClassHash = function() {
	this.hash = new haxe.ds.StringMap();
};
$hxClasses["minject.ClassHash"] = minject.ClassHash;
minject.ClassHash.__name__ = ["minject","ClassHash"];
minject.ClassHash.prototype = {
	exists: function(key) {
		return this.hash.exists(Type.getClassName(key));
	}
	,get: function(key) {
		return this.hash.get(Type.getClassName(key));
	}
	,set: function(key,value) {
		this.hash.set(Type.getClassName(key),value);
	}
	,hash: null
	,__class__: minject.ClassHash
}
minject.InjecteeDescription = function(ctor,injectionPoints) {
	this.ctor = ctor;
	this.injectionPoints = injectionPoints;
};
$hxClasses["minject.InjecteeDescription"] = minject.InjecteeDescription;
minject.InjecteeDescription.__name__ = ["minject","InjecteeDescription"];
minject.InjecteeDescription.prototype = {
	injectionPoints: null
	,ctor: null
	,__class__: minject.InjecteeDescription
}
minject.point = {}
minject.point.InjectionPoint = function(meta,injector) {
	this.initializeInjection(meta);
};
$hxClasses["minject.point.InjectionPoint"] = minject.point.InjectionPoint;
minject.point.InjectionPoint.__name__ = ["minject","point","InjectionPoint"];
minject.point.InjectionPoint.prototype = {
	initializeInjection: function(meta) {
	}
	,applyInjection: function(target,injector) {
		return target;
	}
	,__class__: minject.point.InjectionPoint
}
minject.point.MethodInjectionPoint = function(meta,injector) {
	this.requiredParameters = 0;
	minject.point.InjectionPoint.call(this,meta,injector);
};
$hxClasses["minject.point.MethodInjectionPoint"] = minject.point.MethodInjectionPoint;
minject.point.MethodInjectionPoint.__name__ = ["minject","point","MethodInjectionPoint"];
minject.point.MethodInjectionPoint.__super__ = minject.point.InjectionPoint;
minject.point.MethodInjectionPoint.prototype = $extend(minject.point.InjectionPoint.prototype,{
	gatherParameterValues: function(target,injector) {
		var parameters = [];
		var length = this._parameterInjectionConfigs.length;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			var parameterConfig = this._parameterInjectionConfigs[i];
			var config = injector.getMapping(Type.resolveClass(parameterConfig.typeName),parameterConfig.injectionName);
			var injection = config.getResponse(injector);
			if(injection == null) {
				if(i >= this.requiredParameters) break;
				throw "Injector is missing a rule to handle injection into target " + Type.getClassName(Type.getClass(target)) + ". Target dependency: " + Type.getClassName(config.request) + ", method: " + this.methodName + ", parameter: " + (i + 1) + ", named: " + parameterConfig.injectionName;
			}
			parameters[i] = injection;
		}
		return parameters;
	}
	,gatherParameters: function(meta) {
		var nameArgs = meta.inject;
		var args = meta.args;
		if(nameArgs == null) nameArgs = [];
		this._parameterInjectionConfigs = [];
		var i = 0;
		var _g = 0;
		while(_g < args.length) {
			var arg = args[_g];
			++_g;
			var injectionName = "";
			if(i < nameArgs.length) injectionName = nameArgs[i];
			var parameterTypeName = arg.type;
			if(arg.opt) {
				if(parameterTypeName == "Dynamic") throw "Error in method definition of injectee. Required parameters can't have non class type.";
			} else this.requiredParameters++;
			this._parameterInjectionConfigs.push(new minject.point.ParameterInjectionConfig(parameterTypeName,injectionName));
			i++;
		}
	}
	,initializeInjection: function(meta) {
		this.methodName = meta.name[0];
		this.gatherParameters(meta);
	}
	,applyInjection: function(target,injector) {
		var parameters = this.gatherParameterValues(target,injector);
		var method = Reflect.field(target,this.methodName);
		mcore.util.Reflection.callMethod(target,method,parameters);
		return target;
	}
	,requiredParameters: null
	,_parameterInjectionConfigs: null
	,methodName: null
	,__class__: minject.point.MethodInjectionPoint
});
minject.point.ConstructorInjectionPoint = function(meta,forClass,injector) {
	minject.point.MethodInjectionPoint.call(this,meta,injector);
};
$hxClasses["minject.point.ConstructorInjectionPoint"] = minject.point.ConstructorInjectionPoint;
minject.point.ConstructorInjectionPoint.__name__ = ["minject","point","ConstructorInjectionPoint"];
minject.point.ConstructorInjectionPoint.__super__ = minject.point.MethodInjectionPoint;
minject.point.ConstructorInjectionPoint.prototype = $extend(minject.point.MethodInjectionPoint.prototype,{
	initializeInjection: function(meta) {
		this.methodName = "new";
		this.gatherParameters(meta);
	}
	,applyInjection: function(target,injector) {
		var ofClass = target;
		var withArgs = this.gatherParameterValues(target,injector);
		return mcore.util.Types.createInstance(ofClass,withArgs);
	}
	,__class__: minject.point.ConstructorInjectionPoint
});
minject.point.ParameterInjectionConfig = function(typeName,injectionName) {
	this.typeName = typeName;
	this.injectionName = injectionName;
};
$hxClasses["minject.point.ParameterInjectionConfig"] = minject.point.ParameterInjectionConfig;
minject.point.ParameterInjectionConfig.__name__ = ["minject","point","ParameterInjectionConfig"];
minject.point.ParameterInjectionConfig.prototype = {
	injectionName: null
	,typeName: null
	,__class__: minject.point.ParameterInjectionConfig
}
minject.point.NoParamsConstructorInjectionPoint = function() {
	minject.point.InjectionPoint.call(this,null,null);
};
$hxClasses["minject.point.NoParamsConstructorInjectionPoint"] = minject.point.NoParamsConstructorInjectionPoint;
minject.point.NoParamsConstructorInjectionPoint.__name__ = ["minject","point","NoParamsConstructorInjectionPoint"];
minject.point.NoParamsConstructorInjectionPoint.__super__ = minject.point.InjectionPoint;
minject.point.NoParamsConstructorInjectionPoint.prototype = $extend(minject.point.InjectionPoint.prototype,{
	applyInjection: function(target,injector) {
		return mcore.util.Types.createInstance(target,[]);
	}
	,__class__: minject.point.NoParamsConstructorInjectionPoint
});
minject.point.PostConstructInjectionPoint = function(meta,injector) {
	this.order = 0;
	minject.point.InjectionPoint.call(this,meta,injector);
};
$hxClasses["minject.point.PostConstructInjectionPoint"] = minject.point.PostConstructInjectionPoint;
minject.point.PostConstructInjectionPoint.__name__ = ["minject","point","PostConstructInjectionPoint"];
minject.point.PostConstructInjectionPoint.__super__ = minject.point.InjectionPoint;
minject.point.PostConstructInjectionPoint.prototype = $extend(minject.point.InjectionPoint.prototype,{
	initializeInjection: function(meta) {
		this.methodName = meta.name[0];
		if(meta.post != null) this.order = meta.post[0];
	}
	,applyInjection: function(target,injector) {
		mcore.util.Reflection.callMethod(target,Reflect.field(target,this.methodName),[]);
		return target;
	}
	,methodName: null
	,order: null
	,__class__: minject.point.PostConstructInjectionPoint
});
minject.point.PropertyInjectionPoint = function(meta,injector) {
	minject.point.InjectionPoint.call(this,meta,null);
};
$hxClasses["minject.point.PropertyInjectionPoint"] = minject.point.PropertyInjectionPoint;
minject.point.PropertyInjectionPoint.__name__ = ["minject","point","PropertyInjectionPoint"];
minject.point.PropertyInjectionPoint.__super__ = minject.point.InjectionPoint;
minject.point.PropertyInjectionPoint.prototype = $extend(minject.point.InjectionPoint.prototype,{
	initializeInjection: function(meta) {
		this.propertyType = meta.type[0];
		this.propertyName = meta.name[0];
		if(meta.inject == null) this.injectionName = ""; else this.injectionName = meta.inject[0];
	}
	,applyInjection: function(target,injector) {
		var injectionConfig = injector.getMapping(Type.resolveClass(this.propertyType),this.injectionName);
		var injection = injectionConfig.getResponse(injector);
		if(injection == null) throw "Injector is missing a rule to handle injection into property \"" + this.propertyName + "\" of object \"" + Std.string(target) + "\". Target dependency: \"" + this.propertyType + "\", named \"" + this.injectionName + "\"";
		Reflect.setProperty(target,this.propertyName,injection);
		return target;
	}
	,injectionName: null
	,propertyType: null
	,propertyName: null
	,__class__: minject.point.PropertyInjectionPoint
});
minject.result = {}
minject.result.InjectionResult = function() {
};
$hxClasses["minject.result.InjectionResult"] = minject.result.InjectionResult;
minject.result.InjectionResult.__name__ = ["minject","result","InjectionResult"];
minject.result.InjectionResult.prototype = {
	getResponse: function(injector) {
		return null;
	}
	,__class__: minject.result.InjectionResult
}
minject.result.InjectClassResult = function(responseType) {
	minject.result.InjectionResult.call(this);
	this.responseType = responseType;
};
$hxClasses["minject.result.InjectClassResult"] = minject.result.InjectClassResult;
minject.result.InjectClassResult.__name__ = ["minject","result","InjectClassResult"];
minject.result.InjectClassResult.__super__ = minject.result.InjectionResult;
minject.result.InjectClassResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	getResponse: function(injector) {
		return injector.instantiate(this.responseType);
	}
	,responseType: null
	,__class__: minject.result.InjectClassResult
});
minject.result.InjectOtherRuleResult = function(rule) {
	minject.result.InjectionResult.call(this);
	this.rule = rule;
};
$hxClasses["minject.result.InjectOtherRuleResult"] = minject.result.InjectOtherRuleResult;
minject.result.InjectOtherRuleResult.__name__ = ["minject","result","InjectOtherRuleResult"];
minject.result.InjectOtherRuleResult.__super__ = minject.result.InjectionResult;
minject.result.InjectOtherRuleResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	getResponse: function(injector) {
		return this.rule.getResponse(injector);
	}
	,rule: null
	,__class__: minject.result.InjectOtherRuleResult
});
minject.result.InjectSingletonResult = function(responseType) {
	minject.result.InjectionResult.call(this);
	this.responseType = responseType;
};
$hxClasses["minject.result.InjectSingletonResult"] = minject.result.InjectSingletonResult;
minject.result.InjectSingletonResult.__name__ = ["minject","result","InjectSingletonResult"];
minject.result.InjectSingletonResult.__super__ = minject.result.InjectionResult;
minject.result.InjectSingletonResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	createResponse: function(injector) {
		return injector.instantiate(this.responseType);
	}
	,getResponse: function(injector) {
		if(this.response == null) this.response = this.createResponse(injector);
		return this.response;
	}
	,response: null
	,responseType: null
	,__class__: minject.result.InjectSingletonResult
});
minject.result.InjectValueResult = function(value) {
	minject.result.InjectionResult.call(this);
	this.value = value;
};
$hxClasses["minject.result.InjectValueResult"] = minject.result.InjectValueResult;
minject.result.InjectValueResult.__name__ = ["minject","result","InjectValueResult"];
minject.result.InjectValueResult.__super__ = minject.result.InjectionResult;
minject.result.InjectValueResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	getResponse: function(injector) {
		return this.value;
	}
	,value: null
	,__class__: minject.result.InjectValueResult
});
ractive.RactiveEvents = function() { }
$hxClasses["ractive.RactiveEvents"] = ractive.RactiveEvents;
ractive.RactiveEvents.__name__ = ["ractive","RactiveEvents"];
thx.core = {}
thx.core.AnonymousMap = function(o) {
	this.o = o;
};
$hxClasses["thx.core.AnonymousMap"] = thx.core.AnonymousMap;
thx.core.AnonymousMap.__name__ = ["thx","core","AnonymousMap"];
thx.core.AnonymousMap.__interfaces__ = [IMap];
thx.core.AnonymousMap.prototype = {
	toString: function() {
		return Std.string(this.o);
	}
	,iterator: function() {
		var _g = this;
		return HxOverrides.iter(thx.core.Iterators.map(this.keys(),function(k) {
			return Reflect.field(_g.o,k);
		}));
	}
	,keys: function() {
		return HxOverrides.iter(Reflect.fields(this.o));
	}
	,remove: function(k) {
		return Reflect.deleteField(this.o,k);
	}
	,exists: function(k) {
		return Reflect.hasField(this.o,k);
	}
	,set: function(k,v) {
		this.o[k] = v;
	}
	,get: function(k) {
		return Reflect.field(this.o,k);
	}
	,o: null
	,__class__: thx.core.AnonymousMap
}
thx.core.Arrays = function() { }
$hxClasses["thx.core.Arrays"] = thx.core.Arrays;
thx.core.Arrays.__name__ = ["thx","core","Arrays"];
thx.core.Arrays.cross = function(a,b) {
	var r = [];
	var _g = 0;
	while(_g < a.length) {
		var va = a[_g];
		++_g;
		var _g1 = 0;
		while(_g1 < b.length) {
			var vb = b[_g1];
			++_g1;
			r.push([va,vb]);
		}
	}
	return r;
}
thx.core.Arrays.crossMulti = function(a) {
	var acopy = a.slice(), result = acopy.shift().map(function(v) {
		return [v];
	});
	while(acopy.length > 0) {
		var arr = acopy.shift(), tresult = result;
		result = [];
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < tresult.length) {
				var ar = tresult[_g1];
				++_g1;
				var t = ar.slice();
				t.push(v);
				result.push(t);
			}
		}
	}
	return result;
}
thx.core.Arrays.pushIf = function(arr,cond,value) {
	if(cond) arr.push(value);
	return arr;
}
thx.core.Arrays.mapi = function(arr,handler) {
	var r = [];
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		r.push(handler(arr[i],i));
	}
	return r;
}
thx.core.Iterators = function() { }
$hxClasses["thx.core.Iterators"] = thx.core.Iterators;
thx.core.Iterators.__name__ = ["thx","core","Iterators"];
thx.core.Iterators.map = function(it,f) {
	var acc = [];
	while( it.hasNext() ) {
		var v = it.next();
		acc.push(f(v));
	}
	return acc;
}
thx.core._Procedure = {}
thx.core._Procedure.ProcedureDef_Impl_ = function() { }
$hxClasses["thx.core._Procedure.ProcedureDef_Impl_"] = thx.core._Procedure.ProcedureDef_Impl_;
thx.core._Procedure.ProcedureDef_Impl_.__name__ = ["thx","core","_Procedure","ProcedureDef_Impl_"];
thx.core._Procedure.ProcedureDef_Impl_._new = function(fun) {
	return fun;
}
thx.core._Procedure.ProcedureDef_Impl_.fromArity0 = function(fun) {
	return fun;
}
thx.core._Procedure.ProcedureDef_Impl_.fromArity1 = function(fun) {
	return fun;
}
thx.core._Procedure.ProcedureDef_Impl_.fromArity2 = function(fun) {
	return fun;
}
thx.core._Procedure.ProcedureDef_Impl_.fromArity3 = function(fun) {
	return fun;
}
thx.core._Procedure.ProcedureDef_Impl_.fromArity4 = function(fun) {
	return fun;
}
thx.core._Procedure.ProcedureDef_Impl_.fromArity5 = function(fun) {
	return fun;
}
thx.core._Procedure.ProcedureDef_Impl_.getFunction = function(this1) {
	return this1;
}
thx.core._Procedure.ProcedureDef_Impl_.apply = function(this1,args) {
	this1.apply(null,args);
}
thx.core._Procedure.ProcedureDef_Impl_.equal = function(this1,other) {
	return Reflect.compareMethods(this1,other);
}
thx.core._Procedure.Procedure_Impl_ = function() { }
$hxClasses["thx.core._Procedure.Procedure_Impl_"] = thx.core._Procedure.Procedure_Impl_;
thx.core._Procedure.Procedure_Impl_.__name__ = ["thx","core","_Procedure","Procedure_Impl_"];
thx.core._Procedure.Procedure_Impl_._new = function(fun,arity) {
	return { fun : fun, arity : arity};
}
thx.core._Procedure.Procedure_Impl_.fromArity0 = function(fun) {
	return { fun : fun, arity : 0};
}
thx.core._Procedure.Procedure_Impl_.fromArity1 = function(fun) {
	return { fun : fun, arity : 1};
}
thx.core._Procedure.Procedure_Impl_.fromArity2 = function(fun) {
	return { fun : fun, arity : 2};
}
thx.core._Procedure.Procedure_Impl_.fromArity3 = function(fun) {
	return { fun : fun, arity : 3};
}
thx.core._Procedure.Procedure_Impl_.fromArity4 = function(fun) {
	return { fun : fun, arity : 4};
}
thx.core._Procedure.Procedure_Impl_.fromArity5 = function(fun) {
	return { fun : fun, arity : 5};
}
thx.core._Procedure.Procedure_Impl_.toArity0 = function(this1) {
	if(this1.arity != 0) throw "this procedure has arity " + this1.arity + " but you are trying to use it with arity 0";
	return this1.fun;
}
thx.core._Procedure.Procedure_Impl_.toArity1 = function(this1) {
	if(this1.arity != 1) throw "this procedure has arity " + this1.arity + " but you are trying to use it with arity 1";
	return this1.fun;
}
thx.core._Procedure.Procedure_Impl_.toArity2 = function(this1) {
	if(this1.arity != 2) throw "this procedure has arity " + this1.arity + " but you are trying to use it with arity 2";
	return this1.fun;
}
thx.core._Procedure.Procedure_Impl_.toArity3 = function(this1) {
	if(this1.arity != 3) throw "this procedure has arity " + this1.arity + " but you are trying to use it with arity 3";
	return this1.fun;
}
thx.core._Procedure.Procedure_Impl_.toArity4 = function(this1) {
	if(this1.arity != 4) throw "this procedure has arity " + this1.arity + " but you are trying to use it with arity 4";
	return this1.fun;
}
thx.core._Procedure.Procedure_Impl_.toArity5 = function(this1) {
	if(this1.arity != 5) throw "this procedure has arity " + this1.arity + " but you are trying to use it with arity 5";
	return this1.fun;
}
thx.core._Procedure.Procedure_Impl_.getArity = function(this1) {
	return this1.arity;
}
thx.core._Procedure.Procedure_Impl_.getFunction = function(this1) {
	return this1.fun;
}
thx.core._Procedure.Procedure_Impl_.apply = function(this1,args) {
	if(args.length != this1.arity) throw "invalid number of arguments, expected " + this1.arity + " but was " + args.length;
	this1.fun.apply(null,args);
}
thx.core._Procedure.Procedure_Impl_.equal = function(this1,other) {
	return Reflect.compareMethods(this1.fun,other.fun);
}
thx.core.Strings = function() { }
$hxClasses["thx.core.Strings"] = thx.core.Strings;
thx.core.Strings.__name__ = ["thx","core","Strings"];
thx.core.Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return HxOverrides.substr(value,0,pos);
}
thx.core.Strings.startFrom = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return HxOverrides.substr(value,pos + searchFor.length,null);
}
thx.core.Strings.rtrim = function(value,charlist) {
	var len = value.length;
	while(len > 0) {
		var c = HxOverrides.substr(value,len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	return HxOverrides.substr(value,0,len);
}
thx.core.Strings.ltrim = function(value,charlist) {
	var start = 0;
	while(start < value.length) {
		var c = HxOverrides.substr(value,start,1);
		if(charlist.indexOf(c) < 0) break;
		start++;
	}
	return HxOverrides.substr(value,start,null);
}
thx.core.Strings.trim = function(value,charlist) {
	return thx.core.Strings.rtrim(thx.core.Strings.ltrim(value,charlist),charlist);
}
thx.core.Strings.collapse = function(value) {
	return thx.core.Strings._reCollapse.replace(StringTools.trim(value)," ");
}
thx.core.Strings.ucfirst = function(value) {
	return value == null?null:value.charAt(0).toUpperCase() + HxOverrides.substr(value,1,null);
}
thx.core.Strings.lcfirst = function(value) {
	return value == null?null:value.charAt(0).toLowerCase() + HxOverrides.substr(value,1,null);
}
thx.core.Strings.empty = function(value) {
	return value == null || value == "";
}
thx.core.Strings.isAlphaNum = function(value) {
	return value == null?false:thx.core.Strings.__alphaNumPattern.match(value);
}
thx.core.Strings.digitsOnly = function(value) {
	return value == null?false:thx.core.Strings.__digitsPattern.match(value);
}
thx.core.Strings.ucwords = function(value) {
	return thx.core.Strings.__ucwordsPattern.map(value == null?null:value.charAt(0).toUpperCase() + HxOverrides.substr(value,1,null),thx.core.Strings.__upperMatch);
}
thx.core.Strings.ucwordsws = function(value) {
	return thx.core.Strings.__ucwordswsPattern.map(value == null?null:value.charAt(0).toUpperCase() + HxOverrides.substr(value,1,null),thx.core.Strings.__upperMatch);
}
thx.core.Strings.__upperMatch = function(re) {
	return re.matched(0).toUpperCase();
}
thx.core.Strings.humanize = function(s) {
	return StringTools.replace(thx.core.Strings.underscore(s),"_"," ");
}
thx.core.Strings.capitalize = function(s) {
	return HxOverrides.substr(s,0,1).toUpperCase() + HxOverrides.substr(s,1,null);
}
thx.core.Strings.succ = function(s) {
	return HxOverrides.substr(s,0,-1) + String.fromCharCode(HxOverrides.cca(HxOverrides.substr(s,-1,null),0) + 1);
}
thx.core.Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
}
thx.core.Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
}
thx.core.Strings.repeat = function(s,times) {
	var b = [];
	var _g = 0;
	while(_g < times) {
		var i = _g++;
		b.push(s);
	}
	return b.join("");
}
thx.core.Strings.wrapColumns = function(s,columns,indent,newline) {
	if(newline == null) newline = "\n";
	if(indent == null) indent = "";
	if(columns == null) columns = 78;
	var parts = thx.core.Strings._reSplitWC.split(s);
	var result = [];
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		result.push(thx.core.Strings._wrapColumns(StringTools.trim(thx.core.Strings._reReduceWS.replace(part," ")),columns,indent,newline));
	}
	return result.join(newline);
}
thx.core.Strings._wrapColumns = function(s,columns,indent,newline) {
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(HxOverrides.substr(s,pos,null));
			break;
		}
		var i = 0;
		while(!StringTools.isSpace(s,pos + columns - i) && i < columns) i++;
		if(i == columns) {
			i = 0;
			while(!StringTools.isSpace(s,pos + columns + i) && pos + columns + i < len) i++;
			parts.push(HxOverrides.substr(s,pos,columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(HxOverrides.substr(s,pos,columns - i));
			pos += columns - i + 1;
		}
	}
	return indent + parts.join(newline + indent);
}
thx.core.Strings.stripTags = function(s) {
	return thx.core.Strings._reStripTags.replace(s,"");
}
thx.core.Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	if(s.length > maxlen) return HxOverrides.substr(s,0,symbol.length > maxlen - symbol.length?symbol.length:maxlen - symbol.length) + symbol; else return s;
}
thx.core.Strings.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
}
thx.core.Types = function() { }
$hxClasses["thx.core.Types"] = thx.core.Types;
thx.core.Types.__name__ = ["thx","core","Types"];
thx.core.ClassTypes = function() { }
$hxClasses["thx.core.ClassTypes"] = thx.core.ClassTypes;
thx.core.ClassTypes.__name__ = ["thx","core","ClassTypes"];
thx.core.ClassTypes.toString = function(cls) {
	return Type.getClassName(cls);
}
thx.core.ValueTypes = function() { }
$hxClasses["thx.core.ValueTypes"] = thx.core.ValueTypes;
thx.core.ValueTypes.__name__ = ["thx","core","ValueTypes"];
thx.core.ValueTypes.toString = function(type) {
	return (function($this) {
		var $r;
		var $e = (type);
		switch( $e[1] ) {
		case 1:
			$r = "Int";
			break;
		case 2:
			$r = "Float";
			break;
		case 3:
			$r = "Bool";
			break;
		case 4:
			$r = "Dynamic";
			break;
		case 5:
			$r = "Function";
			break;
		case 6:
			var c = $e[2];
			$r = Type.getClassName(c);
			break;
		case 7:
			var e = $e[2];
			$r = Type.getEnumName(e);
			break;
		default:
			$r = null;
		}
		return $r;
	}(this));
}
thx.core.ValueTypes.typeInheritance = function(type) {
	return (function($this) {
		var $r;
		var $e = (type);
		switch( $e[1] ) {
		case 1:
			$r = ["Int"];
			break;
		case 2:
			$r = ["Float"];
			break;
		case 3:
			$r = ["Bool"];
			break;
		case 4:
			$r = ["Dynamic"];
			break;
		case 5:
			$r = ["Function"];
			break;
		case 6:
			var c = $e[2];
			$r = (function($this) {
				var $r;
				var classes = [];
				while(null != c) {
					classes.push(c);
					c = Type.getSuperClass(c);
				}
				$r = classes.map(Type.getClassName);
				return $r;
			}($this));
			break;
		case 7:
			var e = $e[2];
			$r = [Type.getEnumName(e)];
			break;
		default:
			$r = null;
		}
		return $r;
	}(this));
}
thx.culture.Format = function() { }
$hxClasses["thx.culture.Format"] = thx.culture.Format;
thx.culture.Format.__name__ = ["thx","culture","Format"];
thx.culture.Format.format = function(pattern,values,culture) {
	if(null == values || 0 == values.length) return pattern;
	return (thx.culture.Format.formatf(pattern,culture))(values);
}
thx.culture.Format.formatf = function(pattern,culture) {
	var buf = [];
	while(true) {
		if(!thx.culture.Format._reFormat.match(pattern)) {
			buf.push((function() {
				return function(_) {
					return pattern;
				};
			})());
			break;
		}
		var pos = Std.parseInt(thx.culture.Format._reFormat.matched(1));
		var format = thx.culture.Format._reFormat.matched(2);
		if(format == "") format = null;
		var p = null;
		var params = [];
		var _g = 3;
		while(_g < 20) {
			var i = _g++;
			p = thx.culture.Format._reFormat.matched(i);
			if(p == null || p == "") break;
			params.push(thx.culture.FormatParams.cleanQuotes(p));
		}
		var left = [thx.culture.Format._reFormat.matchedLeft()];
		buf.push((function(left) {
			return function(_) {
				return left[0];
			};
		})(left));
		var df = [thx.culture.Format.formatAnyf(format,params,culture)];
		buf.push(((function() {
			return function(f,i1) {
				return (function() {
					return function(v) {
						return f(i1,v);
					};
				})();
			};
		})())((function(df) {
			return function(i,v) {
				return df[0](v[i]);
			};
		})(df),pos));
		pattern = thx.culture.Format._reFormat.matchedRight();
	}
	return function(values) {
		if(null == values) values = [];
		return buf.map(function(df) {
			return df(values);
		}).join("");
	};
}
thx.culture.Format.formatString = function(v,param,params,culture) {
	return (thx.culture.Format.formatStringf(param,params,culture))(v);
}
thx.culture.Format.formatStringf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"S");
	var format = params.shift();
	switch(format) {
	case "S":
		return function(v) {
			return v;
		};
	case "T":
		var len = params.length < 1?20:Std.parseInt(params[0]);
		var ellipsis = params.length < 2?"...":params[1];
		return (function(f,a1,a2) {
			return function(s) {
				return f(s,a1,a2);
			};
		})(thx.core.Strings.ellipsis,len,ellipsis);
	case "PR":
		var len1 = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.rpad(v,pad,len1);
		};
	case "PL":
		var len2 = params.length < 1?10:Std.parseInt(params[0]);
		var pad1 = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.lpad(v,pad1,len2);
		};
	default:
		return (function($this) {
			var $r;
			throw "Unsupported formatString format: " + format;
			return $r;
		}(this));
	}
}
thx.culture.Format.formatInt = function(v,param,params,culture) {
	return (thx.culture.Format.formatIntf(param,params,culture))(v);
}
thx.culture.Format.formatIntf = function(param,params,culture) {
	return thx.culture.Format.formatFloatf(null,thx.culture.FormatParams.params(param,params,"I"),culture);
}
thx.culture.Format.formatFloat = function(v,param,params,culture) {
	return (thx.culture.Format.formatFloatf(param,params,culture))(v);
}
thx.culture.Format.formatFloatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	var decimals = params.length > 0?Std.parseInt(params[0]):null;
	switch(format) {
	case "D":
		return function(v) {
			return thx.culture.FormatNumber.decimal(v,decimals,culture);
		};
	case "I":
		return function(v) {
			return thx.culture.FormatNumber["int"](v,culture);
		};
	case "C":
		var s = params.length > 1?params[1]:null;
		return function(v) {
			return thx.culture.FormatNumber.currency(v,s,decimals,culture);
		};
	case "P":
		return function(v) {
			return thx.culture.FormatNumber.percent(v,decimals,culture);
		};
	case "M":
		return function(v) {
			return thx.culture.FormatNumber.permille(v,decimals,culture);
		};
	default:
		return (function($this) {
			var $r;
			throw "Unsupported number format: " + format;
			return $r;
		}(this));
	}
}
thx.culture.Format.formatArray = function(v,param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		if(v.length == 0) {
			var empty = null == params[1]?"[]":params[1];
			return empty;
		}
		var sep = null == params[2]?", ":params[2];
		var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
		if(null != max && max < v.length) {
			var elipsis = null == params[4]?" ...":params[4];
			return v.slice(0,max).map(function(d) {
				return thx.culture.Format.formatAny(d,params[0],null,culture);
			}).join(sep) + elipsis;
		} else return v.map(function(d) {
			return thx.culture.Format.formatAny(d,params[0],null,culture);
		}).join(sep);
		break;
	case "C":
		return thx.culture.Format.formatInt(v.length,"I",[],culture);
	default:
		throw "Unsupported array format: " + format;
	}
}
thx.culture.Format.formatArrayf = function(param,params,culture) {
	return (function(f,a1,a2,a3) {
		return function(v) {
			return f(v,a1,a2,a3);
		};
	})(thx.culture.Format.formatArray,param,params,culture);
}
thx.culture.Format.formatDate = function(d,param,params,culture) {
	return (thx.culture.Format.formatDatef(param,params,culture))(d);
}
thx.culture.Format.formatDatef = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	switch(format) {
	case "D":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		};
	case "DS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture);
		};
	case "DST":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.time(d,culture);
		};
	case "DSTS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "DTS":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "Y":
		return function(d) {
			return thx.culture.FormatDate.year(d,culture);
		};
	case "YM":
		return function(d) {
			return thx.culture.FormatDate.yearMonth(d,culture);
		};
	case "M":
		return function(d) {
			return thx.culture.FormatDate.month(d,culture);
		};
	case "MN":
		return function(d) {
			return thx.culture.FormatDate.monthName(d,culture);
		};
	case "MS":
		return function(d) {
			return thx.culture.FormatDate.monthNameShort(d,culture);
		};
	case "MD":
		return function(d) {
			return thx.culture.FormatDate.monthDay(d,culture);
		};
	case "WD":
		return function(d) {
			return thx.culture.FormatDate.weekDay(d,culture);
		};
	case "WDN":
		return function(d) {
			return thx.culture.FormatDate.weekDayName(d,culture);
		};
	case "WDS":
		return function(d) {
			return thx.culture.FormatDate.weekDayNameShort(d,culture);
		};
	case "R":
		return function(d) {
			return thx.culture.FormatDate.dateRfc(d,culture);
		};
	case "DT":
		return function(d) {
			return thx.culture.FormatDate.dateTime(d,culture);
		};
	case "U":
		return function(d) {
			return thx.culture.FormatDate.universal(d,culture);
		};
	case "S":
		return function(d) {
			return thx.culture.FormatDate.sortable(d,culture);
		};
	case "T":
		return function(d) {
			return thx.culture.FormatDate.time(d,culture);
		};
	case "TS":
		return function(d) {
			return thx.culture.FormatDate.timeShort(d,culture);
		};
	case "C":
		var f = params[0];
		if(null == f) return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		}; else return function(d) {
			return thx.culture.FormatDate.format(f,d,culture,params[1] != null?params[1] == "true":true);
		};
		break;
	default:
		throw "Unsupported formatDate format: " + format;
	}
}
thx.culture.Format.formatAny = function(v,param,params,culture) {
	return (thx.culture.Format.formatAnyf(param,params,culture))(v);
}
thx.culture.Format.formatAnyf = function(param,params,culture) {
	return function(v) {
		var _g = Type["typeof"](v);
		var $e = (_g);
		switch( $e[1] ) {
		case 0:
			return thx.culture.Format.nullformatString;
		case 1:
			return thx.culture.Format.formatInt(v,param,params,culture);
		case 2:
			return thx.culture.Format.formatFloat(v,param,params,culture);
		case 3:
			return thx.culture.Format.formatBool(v,param,params,culture);
		case 6:
			var c = $e[2];
			if(c == String) return thx.culture.Format.formatString(v,param,params,culture); else if(c == Array) return thx.culture.Format.formatString(v,param,params,culture); else if(c == Date) return thx.culture.Format.formatDate(v,param,params,culture); else return thx.culture.Format.formatObject(v,param,params,culture);
			break;
		case 4:
			return thx.culture.Format.formatObject(v,param,params,culture);
		case 5:
			return "function()";
		default:
			return (function($this) {
				var $r;
				throw "Unsupported type format: " + Std.string(Type["typeof"](v));
				return $r;
			}(this));
		}
	};
}
thx.culture.Format.formatBool = function(v,param,params,culture) {
	return (thx.culture.Format.formatBoolf(param,params,culture))(v);
}
thx.culture.Format.formatBoolf = function(param,params,culture) {
	return function(v) {
		var _g = Type["typeof"](v);
		var $e = (_g);
		switch( $e[1] ) {
		case 0:
			return thx.culture.Format.nullformatString;
		case 1:
			return thx.culture.Format.formatInt(v,param,params,culture);
		case 2:
			return thx.culture.Format.formatFloat(v,param,params,culture);
		case 3:
			return thx.culture.Format.formatBool(v,param,params,culture);
		case 6:
			var c = $e[2];
			if(c == String) return thx.culture.Format.formatString(v,param,params,culture); else if(c == Array) return thx.culture.Format.formatArray(v,param,params,culture); else if(c == Date) return thx.culture.Format.formatDate(v,param,params,culture); else return thx.culture.Format.formatObject(v,param,params,culture);
			break;
		case 4:
			return thx.culture.Format.formatObject(v,param,params,culture);
		case 5:
			return "function()";
		default:
			return (function($this) {
				var $r;
				throw "Unsupported type format: " + Std.string(Type["typeof"](v));
				return $r;
			}(this));
		}
	};
}
thx.culture.Format.formatObject = function(v,param,params,culture) {
	return (thx.culture.Format.formatObjectf(param,params,culture))(v);
}
thx.culture.Format.formatObjectf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"R");
	var format = params.shift();
	switch(format) {
	case "O":
		return function(v) {
			return Std.string(v);
		};
	case "R":
		return function(v) {
			var buf = [];
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				buf.push(field + ":" + thx.culture.Format.formatAny(Reflect.field(v,field),null,null,culture));
			}
			return "{" + buf.join(",") + "}";
		};
	default:
		return (function($this) {
			var $r;
			throw "Unsupported number format: " + format;
			return $r;
		}(this));
	}
}
thx.culture.FormatDate = function() { }
$hxClasses["thx.culture.FormatDate"] = thx.culture.FormatDate;
thx.culture.FormatDate.__name__ = ["thx","culture","FormatDate"];
thx.culture.FormatDate.format = function(pattern,date,culture,leadingspace) {
	if(leadingspace == null) leadingspace = true;
	var pos = 0;
	var len = pattern.length;
	var buf = new StringBuf();
	var info = culture.date;
	while(pos < len) {
		var c = pattern.charAt(pos);
		if(c != "%") {
			buf.b += Std.string(c);
			pos++;
			continue;
		}
		pos++;
		c = pattern.charAt(pos);
		switch(c) {
		case "a":
			buf.b += Std.string(info.abbrDays[date.getDay()]);
			break;
		case "A":
			buf.b += Std.string(info.days[date.getDay()]);
			break;
		case "b":case "h":
			buf.b += Std.string(info.abbrMonths[date.getMonth()]);
			break;
		case "B":
			buf.b += Std.string(info.months[date.getMonth()]);
			break;
		case "c":
			buf.b += Std.string(thx.culture.FormatDate.dateTime(date,culture));
			break;
		case "C":
			buf.b += Std.string(thx.culture.FormatNumber.digits("" + Math.floor(date.getFullYear() / 100),culture));
			break;
		case "d":
			buf.b += Std.string(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getDate(),"0",2),culture));
			break;
		case "D":
			buf.b += Std.string(thx.culture.FormatDate.format("%m/%d/%y",date,culture));
			break;
		case "e":
			buf.b += Std.string(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getDate()," ",2):"" + date.getDate(),culture));
			break;
		case "f":
			buf.b += Std.string(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + (date.getMonth() + 1)," ",2):"" + (date.getMonth() + 1),culture));
			break;
		case "G":
			throw "Not Implemented Yet";
			break;
		case "g":
			throw "Not Implemented Yet";
			break;
		case "H":
			buf.b += Std.string(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getHours(),"0",2),culture));
			break;
		case "i":
			buf.b += Std.string(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getMinutes()," ",2):"" + date.getMinutes(),culture));
			break;
		case "I":
			buf.b += Std.string(thx.culture.FormatNumber.digits(StringTools.lpad("" + thx.culture.FormatDate.getMHours(date),"0",2),culture));
			break;
		case "j":
			throw "Not Implemented Yet";
			break;
		case "k":
			buf.b += Std.string(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours()," ",2):"" + date.getHours(),culture));
			break;
		case "l":
			buf.b += Std.string(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + thx.culture.FormatDate.getMHours(date)," ",2):"" + thx.culture.FormatDate.getMHours(date),culture));
			break;
		case "m":
			buf.b += Std.string(thx.culture.FormatNumber.digits(StringTools.lpad("" + (date.getMonth() + 1),"0",2),culture));
			break;
		case "M":
			buf.b += Std.string(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getMinutes(),"0",2),culture));
			break;
		case "n":
			buf.b += "\n";
			break;
		case "p":
			buf.b += Std.string(date.getHours() > 11?info.pm:info.am);
			break;
		case "P":
			buf.b += Std.string((date.getHours() > 11?info.pm:info.am).toLowerCase());
			break;
		case "q":
			buf.b += Std.string(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getSeconds()," ",2):"" + date.getSeconds(),culture));
			break;
		case "r":
			buf.b += Std.string(thx.culture.FormatDate.format("%I:%M:%S %p",date,culture));
			break;
		case "R":
			buf.b += Std.string(thx.culture.FormatDate.format("%H:%M",date,culture));
			break;
		case "s":
			buf.b += Std.string("" + (date.getTime() / 1000 | 0));
			break;
		case "S":
			buf.b += Std.string(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getSeconds(),"0",2),culture));
			break;
		case "t":
			buf.b += "\t";
			break;
		case "T":
			buf.b += Std.string(thx.culture.FormatDate.format("%H:%M:%S",date,culture));
			break;
		case "u":
			var d = date.getDay();
			buf.b += Std.string(thx.culture.FormatNumber.digits(d == 0?"7":"" + d,culture));
			break;
		case "U":
			throw "Not Implemented Yet";
			break;
		case "V":
			throw "Not Implemented Yet";
			break;
		case "w":
			buf.b += Std.string(thx.culture.FormatNumber.digits("" + date.getDay(),culture));
			break;
		case "W":
			throw "Not Implemented Yet";
			break;
		case "x":
			buf.b += Std.string(thx.culture.FormatDate.date(date,culture));
			break;
		case "X":
			buf.b += Std.string(thx.culture.FormatDate.time(date,culture));
			break;
		case "y":
			buf.b += Std.string(thx.culture.FormatNumber.digits(HxOverrides.substr("" + date.getFullYear(),-2,null),culture));
			break;
		case "Y":
			buf.b += Std.string(thx.culture.FormatNumber.digits("" + date.getFullYear(),culture));
			break;
		case "z":
			buf.b += "+0000";
			break;
		case "Z":
			buf.b += "GMT";
			break;
		case "%":
			buf.b += "%";
			break;
		default:
			buf.b += Std.string("%" + c);
		}
		pos++;
	}
	return buf.b;
}
thx.culture.FormatDate.getMHours = function(date) {
	var v = date.getHours();
	return v > 12?v - 12:v;
}
thx.culture.FormatDate.yearMonth = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternYearMonth,date,culture,false);
}
thx.culture.FormatDate.monthDay = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternMonthDay,date,culture,false);
}
thx.culture.FormatDate.date = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternDate,date,culture,false);
}
thx.culture.FormatDate.dateShort = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternDateShort,date,culture,false);
}
thx.culture.FormatDate.dateRfc = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternDateRfc,date,culture,false);
}
thx.culture.FormatDate.dateTime = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternDateTime,date,culture,false);
}
thx.culture.FormatDate.universal = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternUniversal,date,culture,false);
}
thx.culture.FormatDate.sortable = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternSortable,date,culture,false);
}
thx.culture.FormatDate.time = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternTime,date,culture,false);
}
thx.culture.FormatDate.timeShort = function(date,culture) {
	return thx.culture.FormatDate.format(culture.date.patternTimeShort,date,culture,false);
}
thx.culture.FormatDate.hourShort = function(date,culture) {
	if(null == culture.date.am) return thx.culture.FormatDate.format("%H",date,culture,false); else return thx.culture.FormatDate.format("%l %p",date,culture,false);
}
thx.culture.FormatDate.year = function(date,culture) {
	return thx.culture.FormatNumber.digits("" + date.getFullYear(),culture);
}
thx.culture.FormatDate.month = function(date,culture) {
	return thx.culture.FormatNumber.digits("" + (date.getMonth() + 1),culture);
}
thx.culture.FormatDate.monthName = function(date,culture) {
	return culture.date.abbrMonths[date.getMonth()];
}
thx.culture.FormatDate.monthNameShort = function(date,culture) {
	return culture.date.months[date.getMonth()];
}
thx.culture.FormatDate.weekDay = function(date,culture) {
	return thx.culture.FormatNumber.digits("" + (date.getDay() + culture.date.firstWeekDay),culture);
}
thx.culture.FormatDate.weekDayName = function(date,culture) {
	return culture.date.abbrDays[date.getDay()];
}
thx.culture.FormatDate.weekDayNameShort = function(date,culture) {
	return culture.date.days[date.getDay()];
}
thx.culture.FormatNumber = function() { }
$hxClasses["thx.culture.FormatNumber"] = thx.culture.FormatNumber;
thx.culture.FormatNumber.__name__ = ["thx","culture","FormatNumber"];
thx.culture.FormatNumber.decimal = function(v,decimals,culture) {
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.number.patternNegative,culture.number.patternPositive,culture,null,null);
}
thx.culture.FormatNumber.percent = function(v,decimals,culture) {
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPercent);
}
thx.culture.FormatNumber.permille = function(v,decimals,culture) {
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPermille);
}
thx.culture.FormatNumber.currency = function(v,symbol,decimals,culture) {
	return thx.culture.FormatNumber.crunch(v,decimals,culture.currency,culture.currency.patternNegative,culture.currency.patternPositive,culture,"$",symbol == null?culture.currencySymbol:symbol);
}
thx.culture.FormatNumber["int"] = function(v,culture) {
	return thx.culture.FormatNumber.decimal(v,0,culture);
}
thx.culture.FormatNumber.digits = function(v,culture) {
	return thx.culture.FormatNumber.processDigits(v,culture.digits);
}
thx.culture.FormatNumber.crunch = function(v,decimals,info,negative,positive,culture,symbol,replace) {
	if(Math.isNaN(v)) return culture.symbolNaN; else if(!Math.isFinite(v)) return v == Math.NEGATIVE_INFINITY?culture.symbolNegInf:culture.symbolPosInf;
	var fv = thx.culture.FormatNumber.value(v,info,decimals == null?info.decimals:decimals < 0?0:decimals,culture.digits);
	if(symbol != null) return StringTools.replace(StringTools.replace(v < 0?negative:positive,"n",fv),symbol,replace); else return StringTools.replace(v < 0?negative:positive,"n",fv);
}
thx.culture.FormatNumber.processDigits = function(s,digits) {
	if(digits == null) return s;
	var o = [];
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		o.push(digits[Std.parseInt(HxOverrides.substr(s,i,1))]);
	}
	return o.join("");
}
thx.culture.FormatNumber.value = function(v,info,decimals,digits) {
	var fv = "" + Math.abs(v);
	var pos = fv.indexOf("E");
	if(pos > 0) {
		var e = Std.parseInt(HxOverrides.substr(fv,pos + 1,null));
		var ispos = true;
		if(e < 0) {
			ispos = false;
			e = -e;
		}
		var s = StringTools.replace(HxOverrides.substr(fv,0,pos),".","");
		if(ispos) fv = StringTools.rpad(s,"0",e + 1); else fv = "0" + StringTools.rpad(".","0",e) + s;
	}
	var parts = fv.split(".");
	var temp = parts[0];
	var intparts = [];
	var group = 0;
	while(true) {
		if(temp.length == 0) break;
		var len = info.groups[group];
		if(temp.length <= len) {
			intparts.unshift(thx.culture.FormatNumber.processDigits(temp,digits));
			break;
		}
		intparts.unshift(thx.culture.FormatNumber.processDigits(HxOverrides.substr(temp,-len,null),digits));
		temp = HxOverrides.substr(temp,0,-len);
		if(group < info.groups.length - 1) group++;
	}
	var intpart = intparts.join(info.groupsSeparator);
	if(decimals > 0) {
		var decpart = parts.length == 1?StringTools.lpad("","0",decimals):parts[1].length > decimals?HxOverrides.substr(parts[1],0,decimals):StringTools.rpad(parts[1],"0",decimals);
		return intpart + info.decimalsSeparator + thx.culture.FormatNumber.processDigits(decpart,digits);
	} else return intpart;
}
thx.culture.FormatParams = function() { }
$hxClasses["thx.culture.FormatParams"] = thx.culture.FormatParams;
thx.culture.FormatParams.__name__ = ["thx","culture","FormatParams"];
thx.culture.FormatParams.cleanQuotes = function(p) {
	if(p.length <= 1) return p;
	var f = HxOverrides.substr(p,0,1);
	if(("\"" == f || "'" == f) && HxOverrides.substr(p,-1,null) == f) return HxOverrides.substr(p,1,p.length - 2); else return p;
}
thx.culture.FormatParams.params = function(p,ps,alt) {
	if(null != ps && null != p) return [p].concat(ps);
	if((null == ps || ps.length == 0) && null == p) return [alt];
	if(null == ps || ps.length == 0) {
		var parts = p.split(":");
		return [parts[0]].concat(parts.length == 1?[]:thx.core.Arrays.mapi(parts[1].split(","),function(s,i) {
			if(0 == i) return s; else return thx.culture.FormatParams.cleanQuotes(s);
		}));
	}
	return ps;
}
thx.react = {}
thx.react.Binder = function() {
	this.map = new haxe.ds.StringMap();
};
$hxClasses["thx.react.Binder"] = thx.react.Binder;
thx.react.Binder.__name__ = ["thx","react","Binder"];
thx.react.Binder.prototype = {
	clear: function(names) {
		if(null == names) this.map = new haxe.ds.StringMap(); else {
			var _g = 0, _g1 = names.split(" ");
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				this.map.remove(name);
			}
		}
	}
	,unbind: function(names,handler) {
		var _g = 0, _g1 = names.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			if(null == handler) this.map.remove(name); else {
				var binds = this.map.get(name);
				if(null == binds) continue;
				binds.remove(handler);
			}
		}
	}
	,bindOne: function(names,handler) {
		var _g = this;
		var p = null;
		p = (function($this) {
			var $r;
			var fun = Reflect.makeVarArgs(function(args) {
				_g.unbind(names,p);
				if(args.length != handler.arity) throw "invalid number of arguments, expected " + handler.arity + " but was " + args.length;
				handler.fun.apply(null,args);
			});
			$r = { fun : fun, arity : handler.arity};
			return $r;
		}(this));
		this.bind(names,p);
	}
	,bind: function(names,handler) {
		var _g = 0, _g1 = names.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			var binds = this.map.get(name);
			if(null == binds) this.map.set(name,binds = new thx.react.ds.ProcedureList());
			binds.add(handler);
		}
	}
	,dispatch: function(names,payload) {
		var list = null, len = payload.length;
		try {
			var _g = 0, _g1 = names.split(" ");
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				list = this.map.get(name);
				if(null == list) continue;
				var $it0 = list.iterator();
				while( $it0.hasNext() ) {
					var handler = $it0.next();
					if(len == handler.arity) {
						if(payload.length != handler.arity) throw "invalid number of arguments, expected " + handler.arity + " but was " + payload.length;
						handler.fun.apply(null,payload);
					}
				}
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.react.Propagation) ) {
			} else throw(e);
		}
	}
	,map: null
	,__class__: thx.react.Binder
}
thx.react.Buffer = function() {
	this.queues = new haxe.ds.StringMap();
	this.consumers = new haxe.ds.StringMap();
};
$hxClasses["thx.react.Buffer"] = thx.react.Buffer;
thx.react.Buffer.__name__ = ["thx","react","Buffer"];
thx.react.Buffer.prototype = {
	trigger: function(name) {
		var list = this.consumers.get(name);
		if(null == list || list.length == 0) return;
		var queue = this.queues.get(name);
		if(null == queue) return;
		var _g = 0;
		while(_g < list.length) {
			var consumer = list[_g];
			++_g;
			var arr = queue.slice(consumer.pos), len = arr.length;
			if(len > 0) {
				consumer.handler(arr);
				consumer.pos += len;
			}
		}
	}
	,consumeImpl: function(name,handler) {
		var list = this.consumers.get(name);
		if(null == list) this.consumers.set(name,list = []);
		list.push({ handler : function(list1) {
			list1.map(handler);
		}, pos : 0});
		this.trigger(name);
	}
	,consumeManyImpl: function(name,handler) {
		var list = this.consumers.get(name);
		if(null == list) this.consumers.set(name,list = []);
		list.push({ handler : handler, pos : 0});
		this.trigger(name);
	}
	,ensureQueue: function(name) {
		var queue = this.queues.get(name);
		if(null == queue) this.queues.set(name,queue = []);
		return queue;
	}
	,queueMany: function(values) {
		var names = [];
		var $it0 = $iterator(values)();
		while( $it0.hasNext() ) {
			var value = $it0.next();
			var name = thx.core.ValueTypes.toString(Type["typeof"](value)), queue = this.ensureQueue(name);
			names.push(name);
			queue.push(value);
		}
		var _g = 0;
		while(_g < names.length) {
			var name = names[_g];
			++_g;
			this.trigger(name);
		}
	}
	,queue: function(value) {
		this.queueMany([value]);
	}
	,consumers: null
	,queues: null
	,__class__: thx.react.Buffer
}
thx.react.Dispatcher = function() {
	this.binder = new thx.react.Binder();
};
$hxClasses["thx.react.Dispatcher"] = thx.react.Dispatcher;
thx.react.Dispatcher.__name__ = ["thx","react","Dispatcher"];
thx.react.Dispatcher.combinedValueTypes = function(values) {
	var alltypes = [];
	var _g = 0;
	while(_g < values.length) {
		var value = values[_g];
		++_g;
		var type = Type["typeof"](value), types = thx.core.ValueTypes.typeInheritance(type);
		if(types[types.length - 1] != "Dynamic") types.push("Dynamic");
		alltypes.push(types);
	}
	return thx.core.Arrays.crossMulti(alltypes).map(function(a) {
		return a.join(";");
	}).join(" ");
}
thx.react.Dispatcher.prototype = {
	triggerDynamic: function(payloads) {
		var names = thx.react.Dispatcher.combinedValueTypes(payloads);
		this.binder.dispatch(names,payloads);
	}
	,clear: function(type,name) {
		if(null != type) this.binder.clear(Type.getClassName(type)); else if(null != name) this.binder.clear(name); else this.binder.clear();
	}
	,binder: null
	,__class__: thx.react.Dispatcher
}
thx.react.Promise = function() {
	this.state = thx.react.PromiseState.Idle;
	this.handlers_succcess = [];
	this.handlers_always = [];
};
$hxClasses["thx.react.Promise"] = thx.react.Promise;
thx.react.Promise.__name__ = ["thx","react","Promise"];
thx.react.Promise.list = function(arr) {
	var results = [], deferred = new thx.react.Deferred(), pos = 0;
	arr = arr.slice();
	var queue = (function($this) {
		var $r;
		var queue1 = null;
		queue1 = function() {
			var first = arr.shift();
			if(null == first) deferred.resolve(results); else first.then(function(v) {
				results[pos++] = v;
				queue1();
			});
		};
		$r = queue1;
		return $r;
	}(this));
	queue();
	return deferred.promise;
}
thx.react.Promise.defer0 = function(handler) {
	var deferred = new thx.react.Deferred0();
	deferred.promise.then(handler);
	return deferred;
}
thx.react.Promise.value0 = function() {
	return new thx.react.Deferred0().resolve();
}
thx.react.Promise.defer = function(handler) {
	var deferred = new thx.react.Deferred();
	deferred.promise.then(handler);
	return deferred;
}
thx.react.Promise.value = function(v) {
	return new thx.react.Deferred().resolve(v);
}
thx.react.Promise.defer2 = function(handler) {
	var deferred = new thx.react.Deferred2();
	deferred.promise.then(handler);
	return deferred;
}
thx.react.Promise.value2 = function(v1,v2) {
	return new thx.react.Deferred2().resolve(v1,v2);
}
thx.react.Promise.defer3 = function(handler) {
	var deferred = new thx.react.Deferred3();
	deferred.promise.then(handler);
	return deferred;
}
thx.react.Promise.value3 = function(v1,v2,v3) {
	return new thx.react.Deferred3().resolve(v1,v2,v3);
}
thx.react.Promise.defer4 = function(handler) {
	var deferred = new thx.react.Deferred4();
	deferred.promise.then(handler);
	return deferred;
}
thx.react.Promise.value4 = function(v1,v2,v3,v4) {
	return new thx.react.Deferred4().resolve(v1,v2,v3,v4);
}
thx.react.Promise.defer5 = function(handler) {
	var deferred = new thx.react.Deferred5();
	deferred.promise.then(handler);
	return deferred;
}
thx.react.Promise.value5 = function(v1,v2,v3,v4,v5) {
	return new thx.react.Deferred5().resolve(v1,v2,v3,v4,v5);
}
thx.react.Promise.prototype = {
	toString: function() {
		return "Promise (handlers: " + this.handlers_succcess.length + ", state : " + Std.string(this.state) + ")";
	}
	,progress_impl: function(names,handler) {
		this.getProgressDispatcher().binder.bind(names,handler);
		this.update();
		return this;
	}
	,fail_impl: function(names,handler) {
		this.getErrorDispatcher().binder.bind(names,handler);
		this.update();
		return this;
	}
	,getProgressDispatcher: function() {
		if(null == this.progressDispatcher) this.progressDispatcher = new thx.react.Dispatcher();
		return this.progressDispatcher;
	}
	,getErrorDispatcher: function() {
		if(null == this.errorDispatcher) this.errorDispatcher = new thx.react.Dispatcher();
		return this.errorDispatcher;
	}
	,update: function() {
		var _g = this;
		var $e = (_g.state);
		switch( $e[1] ) {
		case 0:
			break;
		case 3:
			var args = $e[2];
			var handler_success, handler_always, empty_args = [];
			try {
				while(null != (handler_success = this.handlers_succcess.shift())) handler_success.apply(null,args);
				while(null != (handler_always = this.handlers_always.shift())) handler_always.apply(null,empty_args);
			} catch( e ) {
				this.setState(thx.react.PromiseState.ProgressException([e]));
			}
			break;
		case 1:
			var args = $e[2];
			if(null != this.errorDispatcher) {
				this.errorDispatcher.triggerDynamic(args);
				this.errorDispatcher = null;
			}
			var handler_always, empty_args = [];
			while(null != (handler_always = this.handlers_always.shift())) handler_always.apply(null,empty_args);
			break;
		case 2:
			var args = $e[2];
			if(null != this.progressDispatcher) this.progressDispatcher.triggerDynamic(args);
			this.setState(thx.react.PromiseState.Idle);
			break;
		case 4:
			throw "ProgressException state should never be in the poll";
			break;
		}
	}
	,setStateDelayed: function(newstate) {
		var _g = this;
		haxe.Timer.delay(function() {
			_g.setState(newstate);
		},0);
		return this;
	}
	,setState: function(newstate) {
		var _g = this;
		var $e = (_g.state);
		switch( $e[1] ) {
		case 0:
			this.state = newstate;
			break;
		case 2:
			var _g_fstate_eProgress_0 = $e[2];
			switch( (newstate)[1] ) {
			case 0:
				this.state = newstate;
				break;
			default:
				throw "promise was already " + Std.string(this.state) + ", can't apply new state " + Std.string(newstate);
			}
			break;
		case 3:
			var _g_fstate_eSuccess_0 = $e[2];
			var $e = (newstate);
			switch( $e[1] ) {
			case 4:
				var e = $e[2];
				this.state = thx.react.PromiseState.Failure(e);
				break;
			default:
				throw "promise was already " + Std.string(this.state) + ", can't apply new state " + Std.string(newstate);
			}
			break;
		default:
			throw "promise was already " + Std.string(this.state) + ", can't apply new state " + Std.string(newstate);
		}
		this.update();
		return this;
	}
	,always: function(handler) {
		this.handlers_always.push(handler);
		this.update();
		return this;
	}
	,then: function(success,failure) {
		this.handlers_succcess.push(success);
		if(null != failure) this.getErrorDispatcher().binder.bind("Dynamic",{ fun : failure, arity : 1});
		this.update();
		return this;
	}
	,isComplete: function() {
		return this.isResolved() || this.isFailure();
	}
	,isFailure: function() {
		return (function($this) {
			var $r;
			var _g = $this;
			$r = (function($this) {
				var $r;
				switch( (_g.state)[1] ) {
				case 1:
				case 4:
					$r = true;
					break;
				default:
					$r = false;
				}
				return $r;
			}($this));
			return $r;
		}(this));
	}
	,isResolved: function() {
		return (function($this) {
			var $r;
			var _g = $this;
			$r = (function($this) {
				var $r;
				switch( (_g.state)[1] ) {
				case 3:
					$r = true;
					break;
				default:
					$r = false;
				}
				return $r;
			}($this));
			return $r;
		}(this));
	}
	,progressDispatcher: null
	,errorDispatcher: null
	,state: null
	,handlers_always: null
	,handlers_succcess: null
	,__class__: thx.react.Promise
}
thx.react.PromiseException = function(args) {
	this.args = args;
};
$hxClasses["thx.react.PromiseException"] = thx.react.PromiseException;
thx.react.PromiseException.__name__ = ["thx","react","PromiseException"];
thx.react.PromiseException.prototype = {
	toString: function() {
		if(js.Boot.__instanceof(this.args[0],thx.react.PromiseException)) return (js.Boot.__cast(this.args[0] , thx.react.PromiseException)).toString(); else return "PromiseException: " + this.args.join(", ");
	}
	,args: null
	,__class__: thx.react.PromiseException
}
thx.react.PromiseState = { __ename__ : ["thx","react","PromiseState"], __constructs__ : ["Idle","Failure","Progress","Success","ProgressException"] }
thx.react.PromiseState.Idle = ["Idle",0];
thx.react.PromiseState.Idle.toString = $estr;
thx.react.PromiseState.Idle.__enum__ = thx.react.PromiseState;
thx.react.PromiseState.Failure = function(args) { var $x = ["Failure",1,args]; $x.__enum__ = thx.react.PromiseState; $x.toString = $estr; return $x; }
thx.react.PromiseState.Progress = function(args) { var $x = ["Progress",2,args]; $x.__enum__ = thx.react.PromiseState; $x.toString = $estr; return $x; }
thx.react.PromiseState.Success = function(args) { var $x = ["Success",3,args]; $x.__enum__ = thx.react.PromiseState; $x.toString = $estr; return $x; }
thx.react.PromiseState.ProgressException = function(error) { var $x = ["ProgressException",4,error]; $x.__enum__ = thx.react.PromiseState; $x.toString = $estr; return $x; }
thx.react.BaseDeferred = function() { }
$hxClasses["thx.react.BaseDeferred"] = thx.react.BaseDeferred;
thx.react.BaseDeferred.__name__ = ["thx","react","BaseDeferred"];
thx.react.BaseDeferred.prototype = {
	toString: function() {
		return "" + Type.getClassName(Type.getClass(this)).split(".").pop() + " with " + Std.string(this.promise);
	}
	,notify: function(data) {
		this.promise.setStateDelayed(thx.react.PromiseState.Progress([data]));
		return this;
	}
	,reject: function(error) {
		return this.promise.setStateDelayed(thx.react.PromiseState.Failure([error]));
	}
	,promise: null
	,__class__: thx.react.BaseDeferred
}
thx.react.Deferred0 = function() {
	this.promise = new thx.react.Promise();
};
$hxClasses["thx.react.Deferred0"] = thx.react.Deferred0;
thx.react.Deferred0.__name__ = ["thx","react","Deferred0"];
thx.react.Deferred0.__super__ = thx.react.BaseDeferred;
thx.react.Deferred0.prototype = $extend(thx.react.BaseDeferred.prototype,{
	resolve: function() {
		return this.promise.setStateDelayed(thx.react.PromiseState.Success([]));
	}
	,__class__: thx.react.Deferred0
});
thx.react.Deferred = function() {
	this.promise = new thx.react.Promise();
};
$hxClasses["thx.react.Deferred"] = thx.react.Deferred;
thx.react.Deferred.__name__ = ["thx","react","Deferred"];
thx.react.Deferred.__super__ = thx.react.BaseDeferred;
thx.react.Deferred.prototype = $extend(thx.react.BaseDeferred.prototype,{
	resolve: function(v1) {
		return this.promise.setStateDelayed(thx.react.PromiseState.Success([v1]));
	}
	,__class__: thx.react.Deferred
});
thx.react.Deferred2 = function() {
	this.promise = new thx.react.Promise();
};
$hxClasses["thx.react.Deferred2"] = thx.react.Deferred2;
thx.react.Deferred2.__name__ = ["thx","react","Deferred2"];
thx.react.Deferred2.__super__ = thx.react.BaseDeferred;
thx.react.Deferred2.prototype = $extend(thx.react.BaseDeferred.prototype,{
	resolve: function(v1,v2) {
		return this.promise.setStateDelayed(thx.react.PromiseState.Success([v1,v2]));
	}
	,__class__: thx.react.Deferred2
});
thx.react.Deferred3 = function() {
	this.promise = new thx.react.Promise();
};
$hxClasses["thx.react.Deferred3"] = thx.react.Deferred3;
thx.react.Deferred3.__name__ = ["thx","react","Deferred3"];
thx.react.Deferred3.__super__ = thx.react.BaseDeferred;
thx.react.Deferred3.prototype = $extend(thx.react.BaseDeferred.prototype,{
	resolve: function(v1,v2,v3) {
		return this.promise.setStateDelayed(thx.react.PromiseState.Success([v1,v2,v3]));
	}
	,__class__: thx.react.Deferred3
});
thx.react.Deferred4 = function() {
	this.promise = new thx.react.Promise();
};
$hxClasses["thx.react.Deferred4"] = thx.react.Deferred4;
thx.react.Deferred4.__name__ = ["thx","react","Deferred4"];
thx.react.Deferred4.__super__ = thx.react.BaseDeferred;
thx.react.Deferred4.prototype = $extend(thx.react.BaseDeferred.prototype,{
	resolve: function(v1,v2,v3,v4) {
		return this.promise.setStateDelayed(thx.react.PromiseState.Success([v1,v2,v3,v4]));
	}
	,__class__: thx.react.Deferred4
});
thx.react.Deferred5 = function() {
	this.promise = new thx.react.Promise();
};
$hxClasses["thx.react.Deferred5"] = thx.react.Deferred5;
thx.react.Deferred5.__name__ = ["thx","react","Deferred5"];
thx.react.Deferred5.__super__ = thx.react.BaseDeferred;
thx.react.Deferred5.prototype = $extend(thx.react.BaseDeferred.prototype,{
	resolve: function(v1,v2,v3,v4,v5) {
		return this.promise.setStateDelayed(thx.react.PromiseState.Success([v1,v2,v3,v4,v5]));
	}
	,__class__: thx.react.Deferred5
});
thx.react.Promises5 = function() { }
$hxClasses["thx.react.Promises5"] = thx.react.Promises5;
thx.react.Promises5.__name__ = ["thx","react","Promises5"];
thx.react.Promises5.lose1 = function(promise) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2,v3,v4,_) {
		deferred.resolve(v1,v2,v3,v4);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.lose2 = function(promise) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2,v3,_,_1) {
		deferred.resolve(v1,v2,v3);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.lose3 = function(promise) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2,_,_1,_2) {
		deferred.resolve(v1,v2);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.lose4 = function(promise) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,_,_1,_2,_3) {
		deferred.resolve(v1);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.lose5 = function(promise) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(_,_1,_2,_3,_4) {
		deferred.resolve();
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.await0 = function(promise,other) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2,v3,v4,v5) {
		other.then(function() {
			deferred.resolve(v1,v2,v3,v4,v5);
		});
	});
	return deferred.promise;
}
thx.react.Promises5.transform = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2,v3,v4,v5) {
		deferred.resolve(success(v1,v2,v3,v4,v5));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.pipe0 = function(promise,success) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(v1,v2,v3,v4,v5) {
		success(v1,v2,v3,v4,v5).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.pipe = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2,v3,v4,v5) {
		success(v1,v2,v3,v4,v5).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.pipe2 = function(promise,success) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2,v3,v4,v5) {
		success(v1,v2,v3,v4,v5).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.pipe3 = function(promise,success) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2,v3,v4,v5) {
		success(v1,v2,v3,v4,v5).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.pipe4 = function(promise,success) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2,v3,v4,v5) {
		success(v1,v2,v3,v4,v5).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises5.pipe5 = function(promise,success) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2,v3,v4,v5) {
		success(v1,v2,v3,v4,v5).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4 = function() { }
$hxClasses["thx.react.Promises4"] = thx.react.Promises4;
thx.react.Promises4.__name__ = ["thx","react","Promises4"];
thx.react.Promises4.lose1 = function(promise) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2,v3,_) {
		deferred.resolve(v1,v2,v3);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.lose2 = function(promise) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2,_,_1) {
		deferred.resolve(v1,v2);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.lose3 = function(promise) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,_,_1,_2) {
		deferred.resolve(v1);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.lose4 = function(promise) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(_,_1,_2,_3) {
		deferred.resolve();
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.await0 = function(promise,other) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2,v3,v4) {
		other.then(function() {
			deferred.resolve(v1,v2,v3,v4);
		});
	});
	return deferred.promise;
}
thx.react.Promises4["with"] = function(promise,value) {
	return thx.react.Promises4.await(promise,new thx.react.Deferred().resolve(value));
}
thx.react.Promises4.await = function(promise,other) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2,v3,v4) {
		other.then(function(v5) {
			deferred.resolve(v1,v2,v3,v4,v5);
		});
	});
	return deferred.promise;
}
thx.react.Promises4.transform = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2,v3,v4) {
		deferred.resolve(success(v1,v2,v3,v4));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.pipe0 = function(promise,success) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(v1,v2,v3,v4) {
		success(v1,v2,v3,v4).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.pipe = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2,v3,v4) {
		success(v1,v2,v3,v4).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.pipe2 = function(promise,success) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2,v3,v4) {
		success(v1,v2,v3,v4).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.pipe3 = function(promise,success) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2,v3,v4) {
		success(v1,v2,v3,v4).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.pipe4 = function(promise,success) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2,v3,v4) {
		success(v1,v2,v3,v4).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises4.pipe5 = function(promise,success) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2,v3,v4) {
		success(v1,v2,v3,v4).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3 = function() { }
$hxClasses["thx.react.Promises3"] = thx.react.Promises3;
thx.react.Promises3.__name__ = ["thx","react","Promises3"];
thx.react.Promises3.lose1 = function(promise) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2,_) {
		deferred.resolve(v1,v2);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.lose2 = function(promise) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,_,_1) {
		deferred.resolve(v1);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.lose3 = function(promise) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(_,_1,_2) {
		deferred.resolve();
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.await0 = function(promise,other) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2,v3) {
		other.then(function() {
			deferred.resolve(v1,v2,v3);
		});
	});
	return deferred.promise;
}
thx.react.Promises3["with"] = function(promise,value) {
	return thx.react.Promises3.await(promise,new thx.react.Deferred().resolve(value));
}
thx.react.Promises3.await = function(promise,other) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2,v3) {
		other.then(function(v4) {
			deferred.resolve(v1,v2,v3,v4);
		});
	});
	return deferred.promise;
}
thx.react.Promises3.await2 = function(promise,other) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2,v3) {
		other.then(function(v4,v5) {
			deferred.resolve(v1,v2,v3,v4,v5);
		});
	});
	return deferred.promise;
}
thx.react.Promises3.transform = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2,v3) {
		deferred.resolve(success(v1,v2,v3));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.pipe0 = function(promise,success) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(v1,v2,v3) {
		success(v1,v2,v3).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.pipe = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2,v3) {
		success(v1,v2,v3).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.pipe2 = function(promise,success) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2,v3) {
		success(v1,v2,v3).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.pipe3 = function(promise,success) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2,v3) {
		success(v1,v2,v3).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.pipe4 = function(promise,success) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2,v3) {
		success(v1,v2,v3).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises3.pipe5 = function(promise,success) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2,v3) {
		success(v1,v2,v3).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2 = function() { }
$hxClasses["thx.react.Promises2"] = thx.react.Promises2;
thx.react.Promises2.__name__ = ["thx","react","Promises2"];
thx.react.Promises2.lose1 = function(promise) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,_) {
		deferred.resolve(v1);
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.lose2 = function(promise) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(_,_1) {
		deferred.resolve();
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.await0 = function(promise,other) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2) {
		other.then(function() {
			deferred.resolve(v1,v2);
		});
	});
	return deferred.promise;
}
thx.react.Promises2["with"] = function(promise,value) {
	return thx.react.Promises2.await(promise,new thx.react.Deferred().resolve(value));
}
thx.react.Promises2.await = function(promise,other) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2) {
		other.then(function(v3) {
			deferred.resolve(v1,v2,v3);
		});
	});
	return deferred.promise;
}
thx.react.Promises2.await2 = function(promise,other) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2) {
		other.then(function(v3,v4) {
			deferred.resolve(v1,v2,v3,v4);
		});
	});
	return deferred.promise;
}
thx.react.Promises2.await3 = function(promise,other) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2) {
		other.then(function(v3,v4,v5) {
			deferred.resolve(v1,v2,v3,v4,v5);
		});
	});
	return deferred.promise;
}
thx.react.Promises2.transform = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2) {
		deferred.resolve(success(v1,v2));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.pipe0 = function(promise,success) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(v1,v2) {
		success(v1,v2).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.pipe = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1,v2) {
		success(v1,v2).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.pipe2 = function(promise,success) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1,v2) {
		success(v1,v2).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.pipe3 = function(promise,success) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1,v2) {
		success(v1,v2).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.pipe4 = function(promise,success) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1,v2) {
		success(v1,v2).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises2.pipe5 = function(promise,success) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1,v2) {
		success(v1,v2).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1 = function() { }
$hxClasses["thx.react.Promises1"] = thx.react.Promises1;
thx.react.Promises1.__name__ = ["thx","react","Promises1"];
thx.react.Promises1.lose1 = function(promise) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(_) {
		deferred.resolve();
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1["with"] = function(promise,value) {
	return thx.react.Promises1.await(promise,new thx.react.Deferred().resolve(value));
}
thx.react.Promises1.await0 = function(promise,other) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1) {
		other.then(function() {
			deferred.resolve(v1);
		});
	});
	return deferred.promise;
}
thx.react.Promises1.await = function(promise,other) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1) {
		other.then(function(v2) {
			deferred.resolve(v1,v2);
		});
	});
	return deferred.promise;
}
thx.react.Promises1.await2 = function(promise,other) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1) {
		other.then(function(v2,v3) {
			deferred.resolve(v1,v2,v3);
		});
	});
	return deferred.promise;
}
thx.react.Promises1.await3 = function(promise,other) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1) {
		other.then(function(v2,v3,v4) {
			deferred.resolve(v1,v2,v3,v4);
		});
	});
	return deferred.promise;
}
thx.react.Promises1.await4 = function(promise,other) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1) {
		other.then(function(v2,v3,v4,v5) {
			deferred.resolve(v1,v2,v3,v4,v5);
		});
	});
	return deferred.promise;
}
thx.react.Promises1.transform = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1) {
		deferred.resolve(success(v1));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1.pipe0 = function(promise,success) {
	var deferred = new thx.react.Deferred0();
	promise.then(function(v1) {
		success(v1).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1.pipe = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function(v1) {
		success(v1).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1.pipe2 = function(promise,success) {
	var deferred = new thx.react.Deferred2();
	promise.then(function(v1) {
		success(v1).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1.pipe3 = function(promise,success) {
	var deferred = new thx.react.Deferred3();
	promise.then(function(v1) {
		success(v1).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1.pipe4 = function(promise,success) {
	var deferred = new thx.react.Deferred4();
	promise.then(function(v1) {
		success(v1).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises1.pipe5 = function(promise,success) {
	var deferred = new thx.react.Deferred5();
	promise.then(function(v1) {
		success(v1).then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises0 = function() { }
$hxClasses["thx.react.Promises0"] = thx.react.Promises0;
thx.react.Promises0.__name__ = ["thx","react","Promises0"];
thx.react.Promises0.await0 = function(promise,other) {
	var deferred = new thx.react.Deferred0();
	promise.then(function() {
		other.then(function() {
			deferred.resolve();
		});
	});
	return deferred.promise;
}
thx.react.Promises0["with"] = function(promise,value) {
	return thx.react.Promises0.await(promise,new thx.react.Deferred().resolve(value));
}
thx.react.Promises0.await = function(promise,other) {
	var deferred = new thx.react.Deferred();
	promise.then(function() {
		other.then(function(v1) {
			deferred.resolve(v1);
		});
	});
	return deferred.promise;
}
thx.react.Promises0.await2 = function(promise,other) {
	var deferred = new thx.react.Deferred2();
	promise.then(function() {
		other.then(function(v1,v2) {
			deferred.resolve(v1,v2);
		});
	});
	return deferred.promise;
}
thx.react.Promises0.await3 = function(promise,other) {
	var deferred = new thx.react.Deferred3();
	promise.then(function() {
		other.then(function(v1,v2,v3) {
			deferred.resolve(v1,v2,v3);
		});
	});
	return deferred.promise;
}
thx.react.Promises0.await4 = function(promise,other) {
	var deferred = new thx.react.Deferred4();
	promise.then(function() {
		other.then(function(v1,v2,v3,v4) {
			deferred.resolve(v1,v2,v3,v4);
		});
	});
	return deferred.promise;
}
thx.react.Promises0.await5 = function(promise,other) {
	var deferred = new thx.react.Deferred5();
	promise.then(function() {
		other.then(function(v1,v2,v3,v4,v5) {
			deferred.resolve(v1,v2,v3,v4,v5);
		});
	});
	return deferred.promise;
}
thx.react.Promises0.transform = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function() {
		deferred.resolve(success());
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises0.pipe0 = function(promise,success) {
	var deferred = new thx.react.Deferred0();
	promise.then(function() {
		success().then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises0.pipe = function(promise,success) {
	var deferred = new thx.react.Deferred();
	promise.then(function() {
		success().then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises0.pipe2 = function(promise,success) {
	var deferred = new thx.react.Deferred2();
	promise.then(function() {
		success().then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises0.pipe3 = function(promise,success) {
	var deferred = new thx.react.Deferred3();
	promise.then(function() {
		success().then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises0.pipe4 = function(promise,success) {
	var deferred = new thx.react.Deferred4();
	promise.then(function() {
		success().then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Promises0.pipe5 = function(promise,success) {
	var deferred = new thx.react.Deferred5();
	promise.then(function() {
		success().then($bind(deferred,deferred.resolve));
	},$bind(deferred,deferred.reject));
	return deferred.promise;
}
thx.react.Propagation = function() {
};
$hxClasses["thx.react.Propagation"] = thx.react.Propagation;
thx.react.Propagation.__name__ = ["thx","react","Propagation"];
thx.react.Propagation.cancel = function() {
	throw thx.react.Propagation.instance;
}
thx.react.Propagation.prototype = {
	__class__: thx.react.Propagation
}
thx.react.Provider = function() {
	this.providers = new haxe.ds.StringMap();
};
$hxClasses["thx.react.Provider"] = thx.react.Provider;
thx.react.Provider.__name__ = ["thx","react","Provider"];
thx.react.Provider.prototype = {
	getProvider: function(type) {
		var provider = this.providers.get(type);
		if(null == provider) this.providers.set(type,provider = { deferred : new thx.react.Deferred(), fullfiller : null, demanded : false});
		return provider;
	}
	,provideImpl: function(type,handler) {
		var name = type.toString(), provider = this.getProvider(name);
		if(null != provider.fullfiller) throw "provider implementation already provided";
		provider.fullfiller = function() {
			handler(provider.deferred);
		};
		if(provider.demanded) provider.fullfiller();
	}
	,provideLazy: function(type,handler) {
		this.provideImpl(Type.getClassName(type),handler);
		return this;
	}
	,provide: function(data) {
		this.provideImpl(thx.core.ValueTypes.toString(Type["typeof"](data)),function(d) {
			d.resolve(data);
		});
		return this;
	}
	,demand: function(type) {
		var provider = this.getProvider(Type.getClassName(type));
		if(!provider.demanded && null != provider.fullfiller) provider.fullfiller();
		provider.demanded = true;
		return provider.deferred.promise;
	}
	,providers: null
	,__class__: thx.react.Provider
}
thx.react.Responder = function() {
	this.respondersMap = new haxe.ds.StringMap();
	this.requestsMap = new haxe.ds.StringMap();
};
$hxClasses["thx.react.Responder"] = thx.react.Responder;
thx.react.Responder.__name__ = ["thx","react","Responder"];
thx.react.Responder.prototype = {
	getKey: function(requestType,responseType) {
		return "" + requestType + ":" + responseType;
	}
	,update: function(requestType,responseType) {
		var key = this.getKey(requestType,responseType), requests = this.requestsMap.get(key), responders = this.respondersMap.get(key);
		if(null == requests || null == responders) return;
		var i = requests.length;
		while(--i >= 0) {
			var request = requests[i], promise = null;
			var _g = 0;
			while(_g < responders.length) {
				var responder = responders[_g];
				++_g;
				promise = responder(request.payload);
				if(null != promise) break;
			}
			if(null != promise) {
				requests.splice(i,1);
				promise.then(($_=request.deferred,$bind($_,$_.resolve))).fail_impl("Unknown<0>",{ fun : ($_=request.deferred,$bind($_,$_.reject)), arity : 1}).progress_impl("Unknown<0>",{ fun : ($_=request.deferred,$bind($_,$_.notify)), arity : 1});
			}
		}
	}
	,respond_impl: function(requestType,responseType,handler) {
		var key = this.getKey(requestType,responseType), arr = this.respondersMap.get(key);
		if(null == arr) this.respondersMap.set(key,arr = []);
		arr.push(handler);
		this.update(requestType,responseType);
	}
	,respond: function(handler,requestType,responseType) {
		var request = Type.getClassName(requestType), response = Type.getClassName(responseType);
		return this.respond_impl(request,response,handler);
	}
	,request_impl: function(requestType,responseType,payload) {
		var key = this.getKey(requestType,responseType), arr = this.requestsMap.get(key), deferred = new thx.react.Deferred();
		if(null == arr) this.requestsMap.set(key,arr = []);
		arr.unshift({ payload : payload, deferred : deferred});
		this.update(requestType,responseType);
		return deferred.promise;
	}
	,request: function(payload,responseType) {
		var request = thx.core.ValueTypes.toString(Type["typeof"](payload)), response = Type.getClassName(responseType);
		return this.request_impl(request,response,payload);
	}
	,requestsMap: null
	,respondersMap: null
	,__class__: thx.react.Responder
}
thx.react.Signal = function() {
	this.handlers = new Array();
};
$hxClasses["thx.react.Signal"] = thx.react.Signal;
thx.react.Signal.__name__ = ["thx","react","Signal"];
thx.react.Signal.prototype = {
	exists: function(h) {
		if(null == h) return this.handlers.length > 0; else {
			var _g = 0, _g1 = this.handlers;
			while(_g < _g1.length) {
				var handler = _g1[_g];
				++_g;
				if(h == handler) return true;
			}
			return false;
		}
	}
	,triggerImpl: function(values) {
		var list = this.handlers.slice();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			if(values.length != l.arity) throw "invalid number of arguments, expected " + l.arity + " but was " + values.length;
			l.fun.apply(null,values);
		}
	}
	,clear: function() {
		this.handlers = [];
	}
	,off: function(h) {
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) {
				this.handlers.splice(i,1);
				return true;
			}
		}
		return false;
	}
	,one: function(h) {
		var _g = this;
		var p = null;
		p = (function($this) {
			var $r;
			var fun = Reflect.makeVarArgs(function(args) {
				_g.off(p);
				if(args.length != h.arity) throw "invalid number of arguments, expected " + h.arity + " but was " + args.length;
				h.fun.apply(null,args);
			});
			$r = { fun : fun, arity : h.arity};
			return $r;
		}(this));
		this.on(p);
		return p;
	}
	,on: function(h) {
		this.handlers.push(h);
		return h;
	}
	,handlers: null
	,__class__: thx.react.Signal
}
thx.react.Signal0 = function() {
	thx.react.Signal.call(this);
};
$hxClasses["thx.react.Signal0"] = thx.react.Signal0;
thx.react.Signal0.__name__ = ["thx","react","Signal0"];
thx.react.Signal0.__super__ = thx.react.Signal;
thx.react.Signal0.prototype = $extend(thx.react.Signal.prototype,{
	trigger: function() {
		this.triggerImpl([]);
	}
	,__class__: thx.react.Signal0
});
thx.react.Signal1 = function() {
	thx.react.Signal.call(this);
};
$hxClasses["thx.react.Signal1"] = thx.react.Signal1;
thx.react.Signal1.__name__ = ["thx","react","Signal1"];
thx.react.Signal1.__super__ = thx.react.Signal;
thx.react.Signal1.prototype = $extend(thx.react.Signal.prototype,{
	trigger: function(v) {
		this.triggerImpl([v]);
	}
	,__class__: thx.react.Signal1
});
thx.react.Signal2 = function() {
	thx.react.Signal.call(this);
};
$hxClasses["thx.react.Signal2"] = thx.react.Signal2;
thx.react.Signal2.__name__ = ["thx","react","Signal2"];
thx.react.Signal2.__super__ = thx.react.Signal;
thx.react.Signal2.prototype = $extend(thx.react.Signal.prototype,{
	trigger: function(v1,v2) {
		this.triggerImpl([v1,v2]);
	}
	,__class__: thx.react.Signal2
});
thx.react.Signal3 = function() {
	thx.react.Signal.call(this);
};
$hxClasses["thx.react.Signal3"] = thx.react.Signal3;
thx.react.Signal3.__name__ = ["thx","react","Signal3"];
thx.react.Signal3.__super__ = thx.react.Signal;
thx.react.Signal3.prototype = $extend(thx.react.Signal.prototype,{
	trigger: function(v1,v2,v3) {
		this.triggerImpl([v1,v2,v3]);
	}
	,__class__: thx.react.Signal3
});
thx.react.Signal4 = function() {
	thx.react.Signal.call(this);
};
$hxClasses["thx.react.Signal4"] = thx.react.Signal4;
thx.react.Signal4.__name__ = ["thx","react","Signal4"];
thx.react.Signal4.__super__ = thx.react.Signal;
thx.react.Signal4.prototype = $extend(thx.react.Signal.prototype,{
	trigger: function(v1,v2,v3,v4) {
		this.triggerImpl([v1,v2,v3,v4]);
	}
	,__class__: thx.react.Signal4
});
thx.react.Signal5 = function() {
	thx.react.Signal.call(this);
};
$hxClasses["thx.react.Signal5"] = thx.react.Signal5;
thx.react.Signal5.__name__ = ["thx","react","Signal5"];
thx.react.Signal5.__super__ = thx.react.Signal;
thx.react.Signal5.prototype = $extend(thx.react.Signal.prototype,{
	trigger: function(v1,v2,v3,v4,v5) {
		this.triggerImpl([v1,v2,v3,v4,v5]);
	}
	,__class__: thx.react.Signal5
});
thx.react.ValueBinder = function() {
	this.map = new haxe.ds.StringMap();
	this.values = new haxe.ds.StringMap();
};
$hxClasses["thx.react.ValueBinder"] = thx.react.ValueBinder;
thx.react.ValueBinder.__name__ = ["thx","react","ValueBinder"];
thx.react.ValueBinder.prototype = {
	reset: function(names) {
		if(null == names) this.values = new haxe.ds.StringMap(); else {
			var _g = 0, _g1 = names.split(" ");
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				this.values.remove(name);
			}
		}
	}
	,clear: function(names) {
		if(null == names) this.map = new haxe.ds.StringMap(); else {
			var _g = 0, _g1 = names.split(" ");
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				this.map.remove(name);
			}
		}
	}
	,unbind: function(names,handler) {
		var _g = 0, _g1 = names.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			if(null == handler) this.map.remove(name); else {
				var binds = this.map.get(name);
				if(null == binds) continue;
				var _g3 = 0, _g2 = binds.length;
				while(_g3 < _g2) {
					var i = _g3++;
					if(Reflect.compareMethods(binds[i],handler)) {
						binds.splice(i,1);
						break;
					}
				}
			}
		}
	}
	,bindOne: function(names,handler) {
		var _g = this;
		var p = null;
		p = function(v) {
			_g.unbind(names,p);
			handler(v);
		};
		this.bind(names,p);
	}
	,bind: function(names,handler) {
		var _g = 0, _g1 = names.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			var binds = this.map.get(name), value = this.values.get(name);
			if(null == binds) this.map.set(name,binds = []);
			binds.push(handler);
			handler(null == value?haxe.ds.Option.None:haxe.ds.Option.Some(value));
		}
	}
	,dispatchNone: function(names) {
		var list = null;
		try {
			var _g = 0, _g1 = names.split(" ");
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				this.values.set(name,null);
				list = this.map.get(name);
				if(null == list) continue;
				var _g2 = 0;
				while(_g2 < list.length) {
					var handler = list[_g2];
					++_g2;
					handler(haxe.ds.Option.None);
				}
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.react.Propagation) ) {
			} else throw(e);
		}
	}
	,dispatchSome: function(names,payload) {
		if(null == payload) return this.dispatchNone(names);
		var list = null;
		try {
			var _g = 0, _g1 = names.split(" ");
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				var value = payload;
				this.values.set(name,value);
				list = this.map.get(name);
				if(null == list) continue;
				var _g2 = 0;
				while(_g2 < list.length) {
					var handler = list[_g2];
					++_g2;
					handler(haxe.ds.Option.Some(payload));
				}
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.react.Propagation) ) {
			} else throw(e);
		}
	}
	,values: null
	,map: null
	,__class__: thx.react.ValueBinder
}
thx.react.ValueDispatcher = function() {
	this.binder = new thx.react.ValueBinder();
};
$hxClasses["thx.react.ValueDispatcher"] = thx.react.ValueDispatcher;
thx.react.ValueDispatcher.__name__ = ["thx","react","ValueDispatcher"];
thx.react.ValueDispatcher.valueTypes = function(value) {
	var type = Type["typeof"](value), types = thx.core.ValueTypes.typeInheritance(type);
	if(types[types.length - 1] != "Dynamic") types.push("Dynamic");
	return types.join(";");
}
thx.react.ValueDispatcher.prototype = {
	reset: function(type,name) {
		if(null != type) this.binder.reset(Type.getClassName(type)); else if(null != name) this.binder.reset(name); else this.binder.reset();
	}
	,clear: function(type,name) {
		if(null != type) this.binder.clear(Type.getClassName(type)); else if(null != name) this.binder.clear(name); else this.binder.clear();
	}
	,binder: null
	,__class__: thx.react.ValueDispatcher
}
thx.react.ds = {}
thx.react.ds.ProcedureList = function() {
	this.a = [];
	this.iterators = new haxe.ds.IntMap();
};
$hxClasses["thx.react.ds.ProcedureList"] = thx.react.ds.ProcedureList;
thx.react.ds.ProcedureList.__name__ = ["thx","react","ds","ProcedureList"];
thx.react.ds.ProcedureList.prototype = {
	iterator: function() {
		var _g = this;
		var key = ++thx.react.ds.ProcedureList.iterator_id;
		this.iterators.set(key,0);
		return { next : function() {
			var index = _g.iterators.get(key);
			_g.iterators.set(key,index + 1);
			return _g.a[index];
		}, hasNext : function() {
			if(_g.iterators.exists(key) && _g.iterators.get(key) < _g.a.length) return true; else {
				_g.iterators.remove(key);
				return false;
			}
		}};
	}
	,updateIterators: function(i) {
		var index;
		var $it0 = this.iterators.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			index = this.iterators.get(key);
			if(i < index) this.iterators.set(key,index - 1);
		}
	}
	,remove: function(v) {
		var _g1 = 0, _g = this.a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.a[i].fun,v.fun)) {
				this.updateIterators(i);
				this.a.splice(i,1);
				return true;
			}
		}
		return false;
	}
	,add: function(item) {
		this.a.push(item);
	}
	,a: null
	,iterators: null
	,__class__: thx.react.ds.ProcedureList
}
thx.translation = {}
thx.translation.ITranslation = function() { }
$hxClasses["thx.translation.ITranslation"] = thx.translation.ITranslation;
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype = {
	plural: null
	,singular: null
	,__class__: thx.translation.ITranslation
}
thx.translation.PluralForms = function() { }
$hxClasses["thx.translation.PluralForms"] = thx.translation.PluralForms;
thx.translation.PluralForms.__name__ = ["thx","translation","PluralForms"];
thx.translation.Translation = function(domain) {
	this.translations = new haxe.ds.StringMap();
	this.domains = new haxe.ds.StringMap();
	if(null != domain) this.addDomain(domain);
	this.missingKeyCallback = function(domainName,key) {
	};
};
$hxClasses["thx.translation.Translation"] = thx.translation.Translation;
thx.translation.Translation.__name__ = ["thx","translation","Translation"];
thx.translation.Translation.__interfaces__ = [thx.translation.ITranslation];
thx.translation.Translation.prototype = {
	set_domain: function(domain) {
		return this.domain = domain;
	}
	,get_domain: function() {
		return this.domain;
	}
	,plural: function(ids,idp,quantifier,domainName) {
		if(null == domainName) domainName = this.get_domain().name;
		var index = thx.translation.PluralForms.pluralRules[this.domains.get(domainName).pluralRule](quantifier);
		var v = this.translations.get(domainName).get(idp);
		if(null == v || v[index] == null) {
			if(null != ids && quantifier == 1) {
				this.missingKeyCallback(domainName,ids);
				return ids;
			} else {
				this.missingKeyCallback(domainName,idp);
				return idp;
			}
		} else return v[index];
	}
	,singular: function(id,domainName) {
		if(null == domainName) domainName = this.get_domain().name;
		var v = this.translations.get(domainName).get(id);
		if(null == v) {
			this.missingKeyCallback(domainName,id);
			return id;
		} else return v[0];
	}
	,addPlural: function(ids,idp,texts,domainName) {
		if(null == domainName) domainName = this.get_domain().name;
		this.translations.get(domainName).set(idp,texts);
	}
	,addSingular: function(id,text,domainName) {
		if(null == domainName) domainName = this.get_domain().name;
		this.translations.get(domainName).set(id,[text]);
	}
	,addPo2JsonObject: function(ob) {
		var _g = 0, _g1 = Reflect.fields(ob);
		while(_g < _g1.length) {
			var domainName = _g1[_g];
			++_g;
			if(domainName == "") continue;
			if(!this.domains.exists(domainName)) {
				var domain = thx.culture.Language.getByName(domainName);
				if(null == domain) throw "loaded domain " + domainName + " doesn't match any language in the registered languages";
				this.addDomain(domain);
			}
			var t = this.translations.get(domainName), dob = Reflect.field(ob,domainName);
			var _g2 = 0, _g3 = Reflect.fields(dob);
			while(_g2 < _g3.length) {
				var key = _g3[_g2];
				++_g2;
				if(key == "") continue;
				var v = Reflect.field(dob,key);
				t.set(key,v.slice(1));
			}
		}
	}
	,addDomain: function(domain) {
		if(null == domain) throw "invalid null for argument domain";
		if(this.domains.exists(domain.name)) throw "domain already added: " + Std.string(domain);
		this.translations.set(domain.name,new haxe.ds.StringMap());
		if(null == this.get_domain()) this.set_domain(domain);
	}
	,translations: null
	,domains: null
	,missingKeyCallback: null
	,domain: null
	,__class__: thx.translation.Translation
	,__properties__: {set_domain:"set_domain",get_domain:"get_domain"}
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
thx.culture.Language.languages = new haxe.ds.StringMap();
thx.culture.Culture.cultures = new haxe.ds.StringMap();
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var q = window.jQuery;
js.JQuery = q;
thx.culture.Language.invariant = new thx.culture.Language("en","English","English","en","eng",1);
thx.culture.Culture.invariant = new thx.culture.Culture("en-US","English (United States)","English (United States)","US","USA",1,thx.culture.Language.create("en","English","English","en","eng",1),thx.culture.DateTime.create(["January","February","March","April","May","June","July","August","September","October","November","December",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Su","Mo","Tu","We","Th","Fr","Sa"],"AM","PM","/",":",0,"%B, %Y","%B %d","%A, %B %d, %Y","%f/%e/%Y","%a, %d %b %Y %H:%M:%S GMT","%A, %B %d, %Y %l:%M:%S %p","%Y-%m-%d %H:%M:%SZ","%Y-%m-%dT%H:%M:%S","%l:%M:%S %p","%l:%M %p"),"US Dollar","US Dollar","$","USD","United States","United States",false,null,"-","+","NaN","%","‰","-Infinity","Infinity",thx.culture.Number.create(2,".",[3],",","-n","n"),thx.culture.Number.create(2,".",[3],",","($n)","$n"),thx.culture.Number.create(2,".",[3],",","-n %","n %"));
App.it = new thx.culture.Culture("it-IT","italiano (Italia)","Italian (Italy)","IT","ITA",1,thx.culture.Language.create("it","italiano","Italian","it","ita",1),thx.culture.DateTime.create(["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""],["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],["dom","lun","mar","mer","gio","ven","sab"],["do","lu","ma","me","gi","ve","sa"],null,null,"/",".",1,"%B %Y","%d %B","%A %e %B %Y","%d/%m/%Y","%a, %d %b %Y %H:%M:%S GMT","%A %e %B %Y %k.%M.%S","%Y-%m-%d %H:%M:%SZ","%Y-%m-%dT%H:%M:%S","%k.%M.%S","%k.%M"),"Euro","euro","€","EUR","Italy","Italia",false,null,"-","+","Non un numero reale","%","‰","-Infinito","+Infinito",thx.culture.Number.create(2,",",[3],".","-n","n"),thx.culture.Number.create(2,",",[3],".","-$ n","$ n"),thx.culture.Number.create(2,",",[3],".","-n%","n%"));
App.en = new thx.culture.Culture("en-US","English (United States)","English (United States)","US","USA",1,thx.culture.Language.create("en","English","English","en","eng",1),thx.culture.DateTime.create(["January","February","March","April","May","June","July","August","September","October","November","December",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Su","Mo","Tu","We","Th","Fr","Sa"],"AM","PM","/",":",0,"%B, %Y","%B %d","%A, %B %d, %Y","%f/%e/%Y","%a, %d %b %Y %H:%M:%S GMT","%A, %B %d, %Y %l:%M:%S %p","%Y-%m-%d %H:%M:%SZ","%Y-%m-%dT%H:%M:%S","%l:%M:%S %p","%l:%M %p"),"US Dollar","US Dollar","$","USD","United States","United States",false,null,"-","+","NaN","%","‰","-Infinity","Infinity",thx.culture.Number.create(2,".",[3],",","-n","n"),thx.culture.Number.create(2,".",[3],",","($n)","$n"),thx.culture.Number.create(2,".",[3],",","-n %","n %"));
cocoon.Module.__meta__ = { fields : { injector : { name : ["injector"], type : ["minject.AsyncInjector"], inject : null}, communicator : { name : ["communicator"], type : ["cocoon.Communicator"], inject : null}}};
SampleModule.__meta__ = { fields : { locale : { name : ["locale"], type : ["cocoon.i18n.Locale"], inject : null}}};
IMap.__meta__ = { obj : { 'interface' : null}};
cocoon.log.ILogger.__meta__ = { obj : { 'interface' : null}};
cocoon.log.ConsoleLogger.api = console ||  { warn : function(){}, info : function(){}, log : function(){}, error : function(){}, debug : function(){} }
cocoon.module.JavaScriptAPIModule.__meta__ = { fields : { api_field : { name : ["api_field"], type : ["String"], inject : ["api_field"]}}};
cocoon.module.LogModule.__meta__ = { fields : { logger : { name : ["logger"], type : ["cocoon.log.ILogger"], inject : null}}};
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
ractive.RactiveEvents.teardown = "teardown";
ractive.RactiveEvents.set = "set";
ractive.RactiveEvents.update = "update";
thx.core.Strings._reSplitWC = new EReg("(\r\n|\n\r|\n|\r)","g");
thx.core.Strings._reReduceWS = new EReg("\\s+","");
thx.core.Strings._reStripTags = new EReg("(<[a-z]+[^>/]*/?>|</[a-z]+>)","i");
thx.core.Strings._reCollapse = new EReg("\\s+","g");
thx.core.Strings.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","");
thx.core.Strings.__ucwordswsPattern = new EReg("\\s([a-z])","");
thx.core.Strings.__alphaNumPattern = new EReg("^[a-z0-9]+$","i");
thx.core.Strings.__digitsPattern = new EReg("^[0-9]+$","");
thx.culture.Format._re = new EReg("[{](\\d+)(?::[^}]*)?[}]","m");
thx.culture.Format._reSplitWC = new EReg("(\r\n|\n\r|\n|\r)","g");
thx.culture.Format._reReduceWS = new EReg("\\s+","");
thx.culture.Format._reStripTags = new EReg("(<[a-z]+[^>/]*/?>|</[a-z]+>)","i");
thx.culture.Format._reFormat = new EReg("{(\\d+)(?::([a-zA-Z]+))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?}","m");
thx.culture.Format.nullformatString = "null";
thx.react.Binder.KEY_SEPARATOR = " ";
thx.react.Dispatcher.TYPE_SEPARATOR = ";";
thx.react.Propagation.instance = new thx.react.Propagation();
thx.react.Responder.SEPARATOR = ":";
thx.react.ValueBinder.KEY_SEPARATOR = " ";
thx.react.ds.ProcedureList.iterator_id = 0;
thx.translation.ITranslation.__meta__ = { obj : { 'interface' : null}};
thx.translation.PluralForms.pluralRules = [function(n) {
	return 0;
},function(n) {
	return n != 1?1:0;
},function(n) {
	return n > 1?1:0;
},function(n) {
	return n % 10 == 1 && n % 100 != 11?1:n != 0?2:0;
},function(n) {
	return n == 1?0:n == 2?1:2;
},function(n) {
	return n == 1?0:n == 0 || n % 100 > 0 && n % 100 < 20?1:2;
},function(n) {
	return n % 10 == 1 && n % 100 != 11?0:n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20)?2:1;
},function(n) {
	return n % 10 == 1 && n % 100 != 11?0:n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)?1:2;
},function(n) {
	return n == 1?0:n >= 2 && n <= 4?1:2;
},function(n) {
	return n == 1?0:n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)?1:2;
},function(n) {
	return n % 100 == 1?0:n % 100 == 2?1:n % 100 == 3 || n % 100 == 4?2:3;
},function(n) {
	return n == 1?0:n == 2?1:n >= 3 && n <= 6?2:n >= 7 && n <= 10?3:4;
},function(n) {
	return n == 1?0:n == 2?1:n <= 10?2:3;
},function(n) {
	return n == 1?0:n == 0 || n % 100 > 0 && n % 100 <= 10?1:n % 100 > 10 && n % 100 < 20?2:3;
},function(n) {
	return n % 10 == 1?0:n % 10 == 2?1:2;
}];
thx.translation.PluralForms.pluralForms = [1,2,2,3,3,3,3,3,3,3,4,5,4,4,3];
thx.translation.PluralForms.pluralRulesDescriptions = ["0","n!=1?1:0","n>1?1:0","n%10==1&&n%100!=11?1:n!=0?2:0","n==1?0:n==2?1:2","n==1?0:n==0||n%100>0&&n%100<20?1:2","n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?2:1","n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2","n==1?0:n>=2&&n<=4?1:2","n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2","n%100==1?0:n%100==2?1:n%100==3||n%100==4?2:3","n==1?0:n==2?1:n>=3&&n<=6?2:n>=7&&n<=10?3:4","n==1?0:n==2?1:n<=10?2:3","n==1?0:n==0||n%100>0&&n%100<=10?1:n%100>10&&n%100<20?2:3","n%10==1?0:n%10==2?1:2"];
App.main();
})();

//@ sourceMappingURL=app.js.map