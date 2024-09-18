import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './MoreMenu.module.scss';

function MoreLabel({ title, onBack }) {
    return (
        <div className={clsx(styles.moreLabel)}>
            <p className={clsx(styles.btnBack)} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </p>
            <p className={clsx(styles.moreLabelTitle)}>{title}</p>
        </div>
    );
}

export default MoreLabel;

MoreLabel.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};
