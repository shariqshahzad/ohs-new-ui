import { IconButton, Table } from "@takamol/qiwa-design-system/components";
import React from "react";
import { Eye } from "@takamol/qiwa-design-system/icons";
import { getRandomESTData } from "../data/esRequestList";


function ESTList() {

    const data: any[] = getRandomESTData();
    return (
        <>

            <Table hasCheckboxesOrRadio={false}>
                <Table.Head>
                    <Table.Row>
                        <Table.HeadCell>Issued On</Table.HeadCell>
                        <Table.HeadCell>Creation Date</Table.HeadCell>
                        <Table.HeadCell>Expiration Date</Table.HeadCell>
                        <Table.HeadCell>Zone</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {data.map((est) => (
                        <Table.Row>
                            <Table.Cell>{est.issuedOn}</Table.Cell>
                            <Table.Cell>{est.createdOn.toString()}</Table.Cell>
                            <Table.Cell>{est.expirationDate.toString()}</Table.Cell>
                            <Table.Cell>{est.performanceCardZone}</Table.Cell>
                            <Table.Cell>{est.status}</Table.Cell>
                            <Table.Cell >
                                <IconButton
                                    variant="business"
                                    iconComponent={Eye}
                                />
                            </Table.Cell>
                        </Table.Row>

                    ))}
                </Table.Body>
            </Table>
        </>
    );
}

export default ESTList