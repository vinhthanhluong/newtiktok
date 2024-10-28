import { useContext, useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import config from '~/config';
import MenuSidebar, { MenuSidebarItem } from './MenuSidebar';
import { HomeIcon, ExploreIcon, UsersIcon, LiveIcon, UserIcon } from '~/assets/icon';
import MfooterSidebar from './MfooterSidebar';
import SuggestedAccounts from './SuggestedAccounts';
import { UserContext } from '~/pages/Login/UserContext';
import * as suggestedServices from '~/services/suggestedServices';

function Sidebar() {
    // User
    const { userInfo } = useContext(UserContext);
    // const CurrentUser = !!userInfo;
    const CurrentUser = true;

    //Get suggestions
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        const fetchApiSuggested = async () => {
            const result = await suggestedServices.suggested();
            setSuggestedUsers(result);
        };
        fetchApiSuggested();
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            <MenuSidebar>
                <MenuSidebarItem title="For You" to={config.router.home} icon={<HomeIcon />} />
                <MenuSidebarItem title="Explore" to={config.router.explore} icon={<ExploreIcon />} />
                <MenuSidebarItem title="Following" to={config.router.following} icon={<UsersIcon />} />
                <MenuSidebarItem title="Live" to={config.router.live} icon={<LiveIcon />} />
                <MenuSidebarItem title="Profile" to={config.router.profile} icon={<UserIcon />} />
            </MenuSidebar>
            {CurrentUser ? (
                <>
                    <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
                    <SuggestedAccounts label="Following accounts" />
                </>
            ) : (
                <>
                    <div className={clsx(styles.textMid)}>
                        <p className={clsx(styles.text)}>Log in to follow creators, like videos, and view comments.</p>
                        <Button className={styles.bsidebar} to={config.router.login} primary outline>
                            Log in
                        </Button>
                    </div>
                    <MfooterSidebar />
                </>
            )}
        </div>
    );
}
export default Sidebar;

Sidebar.protoType = {
    // icon: PropTypes.node.isRequired,
};
