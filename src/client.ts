export {};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t: any) {
      return [
        {
          text: 'Attach from Frontify',
          icon: 'https://media.ffycdn.net/eu/demo/43L2Li7yr59XJTunCL2w.svg',
          callback: function () {
            return t.modal({
              url: 'finder.html',
              title: 'Select an Asset from Frontify',
              accentColor: '#cbbbfb',
              fullscreen: true,
            });
          },
        },
      ];
    },
  });
  