const e = React.createElement;

function Finder() {
  React.useEffect(() => {
    const run = async () => {
      const t = window.TrelloPowerUp.iframe();
      try {
        const finder = await window.FrontifyFinder.create({
          clientId: 'client-5jnundpczaaea8ka',
          options: {
            allowMultiSelect: false,
            permanentDownloadUrls: true,
          },
        });

        finder.onAssetsChosen(async (assets) => {
          const selected = assets && assets[0];
          if (selected) {
            await t.attach({
              url: selected.previewUrl || selected.cdn,
              name: selected.title || selected.fileName,
            });
          }
          finder.close();
          t.closeModal();
        });

        finder.onCancel(() => {
          finder.close();
          t.closeModal();
        });

        finder.mount(document.getElementById('finderContainer'));
      } catch (err) {
        console.error('Finder failed to launch:', err);
      }
    };
    run();
  }, []);

  return e('div', { id: 'finderContainer', style: { width: '100%', height: '100%' } });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(Finder));
