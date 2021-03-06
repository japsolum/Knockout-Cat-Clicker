const initialCats= {
	"cats" : [
		{
			"name" : "Tiger",
			"imgSrc" : "images/tiger.jpg",
			"Scientific" : "Panthera Tigris",
			"clickCount" : 0
		},

		{
			"name" : "Leopard",
			"imgSrc" : "images/leopard.jpg",
			"Scientific" : "Panthera Pardus",
			"clickCount" : 0
		},

		{
			"name" : "Cheetah",
			"imgSrc" : "images/cheetah.jpg",
			"Scientific" : "Acinonyx Jubatus",
			"clickCount" : 0
		},

		{
			"name" : "Panther",
			"imgSrc" : "images/panther.jpg",
			"Scientific" : "Panthera Pardus",
			"clickCount" : 0
		},

		{
			"name" : "Lynx",
			"imgSrc" : "images/lynx.jpg",
			"Scientific" : "Lynx Pardinus",
			"clickCount" : 0
		}
	]
};
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.scientific = ko.observable(data.Scientific)

	this.level = ko.computed(function() {
		var clickCount = this.clickCount(),
			level;

		if (clickCount < 10) {
			return("Newborn");
		} else if (clickCount < 50) {
			return("Infant");
		} else if (clickCount < 100) {
			return("Child");
		} else if (clickCount < 200) {
			return("Teen");
		} else if (clickCount < 500) {
			return("Adult");
		} else {
			return("Ninja");
		}

	}, this);
};

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.cats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
}

ko.applyBindings(new ViewModel);

