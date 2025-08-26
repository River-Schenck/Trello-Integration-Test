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
        name: 'Save to Frontify (test)', // shows up in the attachment menu
        callback: function (t, opts) {
          // Trello passes the attachment in either opts.attachment or options.attachment
          const att = (opts && opts.attachment) || (options && options.attachment);
  
          console.log('[SaveAttachment] attachment object:', att);
          console.log('[SaveAttachment] URL:', att?.url);
          console.log('[SaveAttachment] Name:', att?.name);
          console.log('[SaveAttachment] Bytes:', att?.bytes);
          console.log('[SaveAttachment] MimeType:', att?.mimeType);
  
          t.alert({ message: 'Check the console for attachment info 👀', duration: 4 });
        },
      };
    },
  });
  