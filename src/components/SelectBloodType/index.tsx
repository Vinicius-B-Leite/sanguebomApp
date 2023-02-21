import React from 'react';
import { Modal, ModalProps, FlatList } from 'react-native';
import * as S from './style'


type SelectBloodTypeProps = {
    bloodTypeSelected: string[]
    modalProps: ModalProps,
    selectItem: (bloodType: string) => void
}

const bloodTypes = ["A +", "A -", "B +", "B -", "AB +", "AB -", "O +", "O -"];


const SelectBloodType: React.FC<SelectBloodTypeProps> = ({ modalProps, bloodTypeSelected, selectItem }) => {
    return (
        <Modal {...modalProps} >
            <S.Container>
                <S.CloseModal  onPress={modalProps.onRequestClose}/>
                <S.Main>
                    <FlatList
                        data={bloodTypes}
                        renderItem={({ item }) => (
                            <S.ItemContainer onPress={() => selectItem(item)}>
                                <S.ItemSelectButton selected={bloodTypeSelected.includes(item)}>
                                    <S.ItemSelected selected={bloodTypeSelected.includes(item)} />
                                </S.ItemSelectButton>
                                <S.ItemLabel selected={bloodTypeSelected.includes(item)} >{item}</S.ItemLabel>
                            </S.ItemContainer>
                        )}
                    />
                </S.Main>
            </S.Container>
        </Modal>
    )
}

export default SelectBloodType;