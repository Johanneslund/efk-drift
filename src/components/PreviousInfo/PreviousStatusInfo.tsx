import { useEffect, useState } from 'react';
import { getStatusList, getReleaseList } from '../../requests';
import InfoList from './InfoList';


function PreviousStatusInfo(props: any) {

    const [statusList, setStatusList] = useState<any>();
    const [releaseList, setReleaseList] = useState<any>();

    useEffect(() => {
        const run = async () => {
            setStatusList(await getStatusList());
            setReleaseList(await getReleaseList());
        }
        run();
                
    }, [props.time]); 

    return (
        <>
            {statusList && <InfoList list={statusList}>Tidigare avbrott</InfoList>}
            {releaseList && <InfoList list={releaseList}>Release notes</InfoList>}
        </>
    )

}

export default PreviousStatusInfo;