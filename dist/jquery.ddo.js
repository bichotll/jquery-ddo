/*! ddo - v1.0.0 - 2014-07-04
* https://github.com/bichotll/ddo
* Copyright (c) 2014 bichotll; Licensed MIT */
(function($) {

    // Collection method.
    $.fn.ddo = function() {
        return this.each(function() {

            var target = $(this).data('ddo-target');
            if (typeof target === 'undefined') {
                target = 'this';
            }
            var todo = $(this).data('ddo');

            // Do something ddo to each selected element.
            if (typeof $(this).data('ddo-argument-1') !== 'undefined') {

                if (typeof $(this).data('ddo-argument-2') !== 'undefined') {

                    if (typeof $(this).data('ddo-argument-3') !== 'undefined') {

                        if (typeof $(this).data('ddo-argument-4') !== 'undefined') {

                            if (typeof $(this).data('ddo-argument-5') !== 'undefined') {
                                $(target)[todo]($(this).data('ddo-argument-1'), $(this).data('ddo-argument-2'), $(this).data('ddo-argument-3'), $(this).data('ddo-argument-4'), $(this).data('ddo-argument-5'));
                                return;

                            }
                            var arg1 = checkThis($(this).data('ddo-argument-1'), $(this));
                            var arg2 = checkThis($(this).data('ddo-argument-2'), $(this));
                            var arg3 = checkThis($(this).data('ddo-argument-3'), $(this));
                            var arg4 = checkThis($(this).data('ddo-argument-4'), $(this));
                            $(target)[todo](arg1, arg2, arg3, arg4);
                            return;

                        }
                        var arg1 = checkThis($(this).data('ddo-argument-1'), $(this));
                        var arg2 = checkThis($(this).data('ddo-argument-2'), $(this));
                        var arg3 = checkThis($(this).data('ddo-argument-3'), $(this));
                        $(target)[todo](arg1, arg2, arg3);
                        return;

                    }
                    var arg1 = checkThis($(this).data('ddo-argument-1'), $(this));
                    var arg2 = checkThis($(this).data('ddo-argument-2'), $(this));
                    $(target)[todo](arg1, arg2);
                    return;

                }
                var arg1 = checkThis($(this).data('ddo-argument-1'), $(this));
                $(target)[todo](arg1);
                return;

            } else {
                $(target)[todo]();
            }

        });
    };

    /**
     * Check if it's the this and returns the $this
     * 
     * @param {type} arg
     * @param {type} self
     * @returns {unresolved}
     */
    var checkThis = function(arg, self) {
        if (arg === 'this') {
            return self;
        } else {
            return arg;
        }
    };

    // Static method.
    $.ddo = function() {
        // Return something ddo.
        throw "I'm here";
    };

    // Static method default options.
    $.ddo.options = {
    };

}(jQuery));
