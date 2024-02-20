import '../styles/ProfileProgressBar.scss'

const ProfileCompletion = ({ completedItems, totalItems }) => {
    const completionPercentage = Math.floor((completedItems / totalItems) * 100);

    return (
        <div>
            <h4>Complete your Profile</h4>
            <div className='progress'>
                <progress value={completionPercentage} max="100"></progress>
                <p>{completionPercentage}% </p>
                {/* <p>{completedItems} out of {totalItems} items completed</p> */}
            </div>
        </div>
    );
}

export default ProfileCompletion;
