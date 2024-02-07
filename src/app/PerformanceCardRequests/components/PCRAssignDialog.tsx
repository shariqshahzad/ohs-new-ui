import { Modal, Box, Text, Button, ButtonGroup, Icon, Select } from "@takamol/qiwa-design-system/components";
import { Info } from "@takamol/qiwa-design-system/icons";
import React, { useState } from "react";
import { useLocale } from "src/app/translations/hooks/useLocale";
import { statusesForSelect } from "../constants/PCRStatus";
import { ASSIGNEES } from '../data/assignee';

const PCRAssignDialog = ({ closeDialogBox, isOpen, data }: any) => {
    const { t, locale } = useLocale();
    const [selectedAssignee, setSelectedAssignee] = useState('');
    const [AssigneeFilter, setassigneeFilter] = useState('');
    const onClose = () => {
        closeDialogBox();
    }
    return (
        <Modal
            hasCloseButton={false}
            desktopWidth="wide"
            handleClose={() => { }}
            isOpened={isOpen}
        >
            <Modal.Body>
                <Box
                    gap={24}
                    withDividers
                >
                    <div style={{ display: "flex", flexDirection: 'column', height: '280px' }}>
                        <Text
                            pe={8}
                            variant="heading-xs"
                            weight="semibold"
                        >
                            Assign Specialist
                        </Text>
                        <div style={{ alignSelf: 'center', display: 'flex',marginTop:'20px' }}>
                            <div style={{ alignSelf: 'center',paddingRight:'10px' }}>
                                <Text
                                    variant="special-caption"
                                    weight="bold"
                                >
                                    Assignee
                                </Text>
                            </div>
                            <Select
                                id="select"
                                isWithFilter
                                maxInputWidth={[
                                    '100%',
                                    240
                                ]}
                                maxOptionsHeight='180px'
                                maxOptionsWidth={240}
                                onChange={(e) => {
                                    setSelectedAssignee(e);
                                }}
                                onInputChange={(e) => {
                                    setassigneeFilter(e)
                                }}
                                options={ASSIGNEES.map((assignee)=>({
                                    value:assignee,
                                    option : assignee
                                }))}
                                filterInputValue={AssigneeFilter}
                                value={selectedAssignee}
                                variant="individuals"
                            />
                        </div>


                    </div>

                </Box>
            </Modal.Body>
            <Modal.Footer>
                <Text
                    variant="special-captionSmall"
                    weight="bold"
                    color='warning_600'
                >
                    <div style={{ display: 'flex', marginBottom: '20px', justifyContent:'center' }}>
                        <Icon
                            color="warning_600"
                            iconComponent={Info}
                            radiusVariant="rounded"
                            size={24}
                        />
                        <div style={{ alignSelf: 'center' }}>
                            {t('Youassigntheactioncannotundone')}
                        </div>
                    </div>
                </Text>
                <ButtonGroup>
                    <Button variant="business_primary_filled">
                        Confirm
                    </Button>
                    <Button variant="business_ghost" onClick={onClose}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Modal.Footer>
        </Modal>
    )
}

export default PCRAssignDialog;
