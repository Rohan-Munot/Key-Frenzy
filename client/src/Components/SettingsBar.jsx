export function SettingsBar() {
    return (
        <div className={'settings-bar'}>
            <div className={'nav-links'}>
                <div className={'nav-links-1'}>
                    <div className={'nav-links-inner'}>
                        <div className={'time-wrapper'}>
                            <span className={'time-nav'}>Time</span>
                        </div>
                    </div>
                    <div className={'nav-links-inner'}>
                        <div className={'words-wrapper'}>
                            <span className={'words-nav'}>Words</span>
                        </div>
                    </div>

                </div>
                <div className={'divider-1'}></div>
                <div className={'nav-links-1'}>
                    <div className="nav-links-inner">
                        <div className="container">
                        <div className="time-setting">15</div>
                        </div>
                    </div>
                    <div className="nav-links-inner">
                        <div className="container">
                            <div className="time-setting">25</div>
                        </div>
                    </div>
                    <div className="nav-links-inner">
                        <div className="container">
                            <div className="time-setting">40</div>
                        </div>
                    </div>
                    <div className="nav-links-inner">
                        <div className="container">
                            <div className="time-setting">60</div>
                        </div>
                    </div>
                    <div className="nav-links-inner">
                        <div className="container">
                            <div className="time-setting">90</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}