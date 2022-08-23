import { UploadAvatar } from './styles'
import { MdAddAPhoto } from 'react-icons/md'
import { useUserContext } from '../../hooks/useUserContext';

export const UpdateAvatar = () => {
    const { handleUpdateAvatar } = useUserContext()

    return (
        <UploadAvatar>
            <label htmlFor='avatarUpload'>
                <MdAddAPhoto />
            </label>
            <input
                name="avatarUpload"
                id="avatarUpload"
                type="file"
                accept="image/png, image/jpeg"
                placeholder="Digite seu e-mail"
                onChange={handleUpdateAvatar}
                style={{ display: "none" }}
            />
        </UploadAvatar>
    )
}