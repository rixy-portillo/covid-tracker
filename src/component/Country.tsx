import { ResponsiveChoropleth } from '@nivo/geo';
import { useWindowSize } from '../hooks/UseWindowSize';
import countries from './MapData.json';

interface Props {
    data: any[]
}

const Country = ({ data }: Props) => {
    const size = useWindowSize()
    const width = size.width || 100
    return (
        <ResponsiveChoropleth
            data={data}
            features={countries.features}
            margin={{ top: 100, right: 0, bottom: 0, left: 0 }}
            colors="PuBu"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={width / 7}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'row',
                    justify: true,
                    translateX: 30,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: width / 10,
                    itemHeight: 18,
                    itemDirection: 'right-to-left',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default Country