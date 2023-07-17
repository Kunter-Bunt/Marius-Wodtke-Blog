class MwoTrack {
    public static TrackAnonymous() {
        const page = window.location.pathname;
        fetch("/api/anonymouspageview",
            {
                method: "POST",
                body: JSON.stringify({page: page})
            });
    }
}

window.addEventListener('load', () => {
    setTimeout(function () {
        MwoTrack.TrackAnonymous();
    }, 0);
})