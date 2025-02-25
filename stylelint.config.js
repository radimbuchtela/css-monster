import IdiomaticOrderConfig from 'stylelint-config-idiomatic-order';

export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-idiomatic-order',
        'stylelint-config-two-dash-bem',
    ],
    plugins: [
        '@stylistic/stylelint-plugin',
    ],
    rules: {
        'order/properties-order': [
            [
                'content',
                ...IdiomaticOrderConfig.rules['order/properties-order'][0]
            ],
            IdiomaticOrderConfig.rules['order/properties-order'][1],
        ],
    }
};
