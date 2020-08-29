import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'dh8laev25', 
    api_key: '346669248751547', 
    api_secret: 'i42G3ChIjwGplCaMpMtP4hh2zus'
});

describe('Prueba en fileUpload', () => {
    test('debe de cargar un archivo y retornar el URL', async(done) => {
        const resp = await fetch('https://pbs.twimg.com/profile_images/412674559783882752/NPFgvV7O.jpeg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg'); 
        const url =  await fileUpload(file);

        expect( typeof url ).toBe('string');

        // Eliminar imagen por ID
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

        cloudinary.v2.api.delete_resources( imageId, {}, () => {
            done();
        })
    });

    test('debe retornar un error', async() => {
        
        const file = new File([], 'foto.jpg'); 
        const url =  await fileUpload(file);

        expect( url ).toBe( null );
    })    
})
