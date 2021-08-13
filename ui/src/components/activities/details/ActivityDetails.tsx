import { observer } from 'mobx-react-lite';
import { Button, Card, Image } from 'semantic-ui-react'
import Loading from '../../../app/layout/Loading';
import { useStore } from '../../../app/stores/store';


const ActivityDetails = () => {
    const { activityStore } = useStore();
    const { selectedActivity } = activityStore;
    if (!selectedActivity) return <Loading />;
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{selectedActivity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{selectedActivity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {selectedActivity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic onClick={() => activityStore.openForm(selectedActivity.id)} color='blue' content='Edit' />
                    <Button onClick={() => activityStore.cancelSelectedActivity()} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default observer(ActivityDetails)
