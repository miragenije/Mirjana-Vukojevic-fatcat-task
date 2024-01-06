import {showCaseItems} from '@/config/showCaseItems'

type HeroComponentProps = {
    title: string;
    subtitle: string;
};

type ItemsShowcaseComponentProps = {
    items: showCaseItems;
};

type TrustBarComponentProps = {
    trustLevel: string;
};

type LayoutSection = {
    type: 'layoutSection';
    props: {
        backgroundColor: string;
    };
    components: (HeroComponent | ItemsShowcaseComponent | TrustBarComponent)[];
};

type HeroComponent = {
    type: 'componentHero';
    props: HeroComponentProps;
};

type ItemsShowcaseComponent = {
    type: 'componentItemsShowcase';
    props: ItemsShowcaseComponentProps;
};

type TrustBarComponent = {
    type: 'componentTrustBar';
    props: TrustBarComponentProps;
};

type ShowPanelItem = LayoutSection;

export const showPanelItems: ShowPanelItem[] = [
    {
        type: 'layoutSection',
        props: { backgroundColor: '#f0f0f0' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to Our Website',
                    subtitle: 'Explore our amazing features.',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: '#ffffff' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: showCaseItems
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    trustLevel: 'High',
                },
            },
        ],
    },
];
