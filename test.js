import postcss from 'postcss';
import test from 'ava';

import plugin from './';
import properties from './dictionary/properties';
import values from './dictionary/values';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

function propertyTest(italian, english) {
    test(`Converts property "${italian}" to "${english}"`, t => {
        return run(
            t,
            `a{ ${italian}: test }`,
            `a{ ${english}: test }`
        );
    });
}

function valueTest(italian, english) {
    test(`Converts value "${italian}" to "${english}"`, t => {
        return run(
            t,
            `a{ test: ${italian} }`,
            `a{ test: ${english} }`
        );
    });
}

// Tests

Object.keys(properties).forEach(
    engProperty => {
        const itaProperty = properties[engProperty];

        if (typeof itaProperty === 'string') {
            propertyTest(itaProperty, engProperty);

            test('Equal properties should be commented out', t => {
                t.notDeepEqual(itaProperty, engProperty);
            });
        } else {
            for (let i = 0; i < itaProperty.length; i++) {
                propertyTest(itaProperty[i], engProperty);

                test('Equal properties should be commented out', t => {
                    t.notDeepEqual(itaProperty[i], engProperty);
                });
            }
        }
    }
);

Object.keys(values).forEach(
    engValue => {
        const itaValue = values[engValue];

        if (typeof itaValue === 'string') {
            valueTest(itaValue, engValue);

            test('Equal values should be commented out', t => {
                t.notDeepEqual(itaValue, engValue);
            });
        } else {
            for (let i = 0; i < itaValue.length; i++) {
                valueTest(itaValue[i], engValue);

                test('Equal values should be commented out', t => {
                    t.notDeepEqual(itaValue[i], engValue);
                });
            }
        }
    }
);

test('Converts multiple values', t => {
    return run(
        t,
        'a{ bordo-colore: neve blu blu blu; }',
        'a{ border-color: snow blue blue blue; }'
    );
});

test('Converts "!importante" to "!important"', t => {
    return run(
        t,
        'a{ flex: 1 !importante; }',
        'a{ flex: 1 !important; }'
    );
});
