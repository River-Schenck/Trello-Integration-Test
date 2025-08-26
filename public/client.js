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
              fullscreen: true,
            });
          },
        },
      ];
    },
    'save-attachment': function (t, options) {
    return {
      name: 'Save to Frontify (test)',
      callback: async function (t, opts) {
        const att = (opts && opts.attachment) || (options && options.attachment);
        // Quick sanity logs
        console.log('[SaveAttachment] attachment:', att);
        console.log('[SaveAttachment] url:', att?.url);
        console.log('[SaveAttachment] name:', att?.name);
        console.log('[SaveAttachment] bytes:', att?.bytes);
        console.log('[SaveAttachment] mimeType:', att?.mimeType);

        t.alert({ message: 'Check the console for attachment info 👀', duration: 5 });
      },
    };
  },
  });
  