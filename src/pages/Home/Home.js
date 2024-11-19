import ActionsPage from '~/components/ActionsPage';
import ViewVideo from '~/components/ViewVideo';

function Home() {
    const TYPE_CATEGORY = 'for-you';
    return (
        <>
            <ViewVideo type={TYPE_CATEGORY} />
            <ActionsPage />
        </>
    );
}

export default Home;
