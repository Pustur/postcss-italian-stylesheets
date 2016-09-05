var postcss = require('postcss');
var values = require('./dictionary/values');
var properties = require('./dictionary/properties');

module.exports = postcss.plugin('postcss-italian-stylesheets', function () {
    var importantValue = '!importante';

    return function (root) {
        root.walkDecls(function (decl) {
            // Convert Properties
            Object.keys(properties).forEach(function (engProperty) {
                var itaProperty = properties[engProperty];

                if (typeof itaProperty === 'string') {
                    if (decl.prop === itaProperty) {
                        decl.prop = engProperty;
                    }
                } else {
                    for (var i = 0; i < itaProperty.length; i++) {
                        if (decl.prop === itaProperty[i]) {
                            decl.prop = engProperty;
                        }
                    }
                }
            });

            // Convert Values
            Object.keys(values).forEach(function (engValue) {
                var itaValue = values[engValue];

                if (typeof itaValue === 'string') {
                    decl.value = decl.value.replace(
                        new RegExp(
                            '([^\\w-]+|^)(' + itaValue + ')(?=[^\\w-]+|$)',
                            'g'
                        ),
                        '$1' + engValue
                    );
                } else {
                    for (var i = 0; i < itaValue.length; i++) {
                        decl.value = decl.value.replace(
                            new RegExp(
                                '([^\\w-]+|^)' +
                                '(' + itaValue[i] + ')' +
                                '(?=[^\\w-]+|$)',
                                'g'
                            ),
                            '$1' + engValue
                        );
                    }
                }
            });

            // Convert "!importante"
            if (decl.value.indexOf(importantValue) >= 0) {
                decl.value = decl.value.replace(
                    new RegExp('\\s*' + importantValue + '\\s*'),
                    ''
                );
                decl.important = true;
            }
        });
    };
});
