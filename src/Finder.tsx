import { useEffect } from 'react';

export const Finder = () => {
  useEffect(() => {
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

        finder.onAssetsChosen(async (assets: any[]) => {
          const selected = assets?.[0];
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

        finder.mount(document.getElementById('finderContainer')!);
        t.render(() => t.sizeTo('#finderContainer').done());
      } catch (err) {
        console.error('Finder failed:', err);
      }
    };

    run();
  }, []);

  return <div id="finderContainer" style={{ width: '100vw', height: '100vh' }} />;
};
