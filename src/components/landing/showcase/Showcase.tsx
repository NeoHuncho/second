import { Tabs } from '@mantine/core';
import type ShowcaseCategories from '../../../../backend/static/landingShowcase/Showcasecategories';
import { showcaseTabs } from '../../../../common/keys/keys';
import type { IconNames } from '../../../assets/icons';
import { Icon } from '../../../assets/icons';
import SwiperCarousel from '../../common/SwiperCarousel';

interface Props {
    category: typeof ShowcaseCategories.repairable
}


export default function Showcase({ category }: Props) {
    return (
        <Tabs  defaultValue={Object.keys(category)[0]}>
            <Tabs.List>
                {Object.keys(category).map((key) => (
                    <Tabs.Tab value={key} key={key} icon={<Icon name={key.replace(/^\w/, c => c.toUpperCase()) as IconNames} />}>
                        {showcaseTabs[key as keyof typeof showcaseTabs]}
                    </Tabs.Tab>
                )
                )}
            </Tabs.List>

            {Object.entries(category).map(([key, value]) => (
                <Tabs.Panel className='mt-2' value={key} key={key}>
                    <SwiperCarousel slides={value} />
                </Tabs.Panel>
            ))}
        </Tabs>
    );
}