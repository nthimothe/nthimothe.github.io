// (c) 2024 Nathan Thimothe
import GenCard from './GenCard';
import BasicCardElement from './BasicCardElement';

const BasicCard = ({ info, titleMarginTop }) => {
    return (
        <GenCard
            id={info.id}
            title={info.cardTitle}
            sx={{ paddingBottom: 4 }} >
            {
                info.list.map((element) => (
                    <BasicCardElement element={element} titleMarginTop={titleMarginTop} />
                ))
            }
        </GenCard >
    )
}
export default BasicCard;