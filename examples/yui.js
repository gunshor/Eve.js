Eve.register('rot13', function(ns) {

	function rot13(e) {
		var el = e.currentTarget;
		el.setContent(el.getContent().replace(/[a-zA-Z]/g, function(c) {
			return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
		}));
	};
	
	this.listen('ul li', 'mouseover', rot13);
	this.listen('ul li', 'mouseout', rot13);

});

Eve.register('active', function() {
	
	this.listen('li', 'click', function(e) {

		this.find('.active').each(function(l) {
			l.removeClass('active');
		});
		
		(e.target).addClass('active');
		
	});

});

Eve.attach('active', '.list-module ul');
Eve.attach('rot13',	 '.list-module');

Eve.scope('.other-module', function() {
	
	this.listen('ul', 'click', function(e) {
		console.log("Inner module click!");
	});
	this.attach('rot13');
});