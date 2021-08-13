import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Loading from '../../../app/layout/Loading';
import { useStore } from '../../../app/stores/store';
import ActivityDetailsChat from './ActivityDetailsChat';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsSideBar from './ActivityDetailsSideBar';


const ActivityDetails = () => {

    const { activityStore } = useStore();
    const { selectedActivity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !selectedActivity) return <Loading />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailsHeader activity={selectedActivity} />
                <ActivityDetailsInfo activity={selectedActivity} />
                <ActivityDetailsChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailsSideBar />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDetails)
