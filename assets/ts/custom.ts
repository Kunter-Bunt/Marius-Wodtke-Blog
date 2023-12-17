class MwoTrack {
    public static TrackAnonymous() {
        const data = {
            id: this.uuidv4(),
            page: window.location.pathname,
            date: new Date().toISOString().split('T')[0]
          };
        
          const gql = `
            mutation create($item: CreatePageViewInput!) {
              createPageView(item: $item) {
                id
                page
              }
            }`;
          
          const query = {
            query: gql,
            variables: {
              item: data
            } 
          };

          const endpoint = "/data-api/graphql";
          const result = fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(query)
          });
    }

    public static uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (<any>c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> <any>c / 4).toString(16)
        );
      }
}

window.addEventListener('load', () => {
    setTimeout(function () {
        MwoTrack.TrackAnonymous();
    }, 0);
})