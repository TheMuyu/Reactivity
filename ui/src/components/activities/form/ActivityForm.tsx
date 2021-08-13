import { observer } from 'mobx-react-lite'
import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button, Form, Segment } from 'semantic-ui-react'
import Loading from '../../../app/layout/Loading'
import { useStore } from '../../../app/stores/store'
import { v4 as uuid } from 'uuid';


const ActivityForm = () => {
    const { activityStore } = useStore();
    const { loadActivity, updateActivity, createActivity, loading, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [redirectUrl, setRedirectUrl] = useState('/activities');
    const [activity, setActivity] = useState({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) {
            loadActivity(id).then(activity => setActivity(activity!));
            setRedirectUrl(`/activity/${id}`);
        }
    }, [id, loadActivity]);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => {
                history.push(`/activity/${newActivity.id}`);
            })
        } else {
            updateActivity(activity).then(() => history.push(`/activity/${activity.id}`));
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    if (loadingInitial) {
        return (
            <Loading content='Activity Loading...' />
        )
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder="Title" value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder="Description" value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder="Category" value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input type='date' placeholder="Date" value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder="City" value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder="Venue" value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button as={Link} to={redirectUrl} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default observer(ActivityForm)
