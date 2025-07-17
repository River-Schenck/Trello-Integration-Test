TrelloPowerUp.initialize({
    'card-buttons': function (t) {
      return [
        {
          text: 'Attach from Frontify',
          icon: 'https://media.ffycdn.net/eu/demo/43L2Li7yr59XJTunCL2w.svg',
          callback: function (t) {
            return t.modal({
              url: 'finder.html',
              accentColor: '#cbbbfb',
              title: 'Select an Asset from Frontify test',
              height: 800,
              fullscreen: false,
            });
          },
        },
      ];
    },
  });
  