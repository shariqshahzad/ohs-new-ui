import { IconButton, Table } from "@takamol/qiwa-design-system/components";
import React from "react";
import { Eye } from "@takamol/qiwa-design-system/icons";
import { getRandomVisitData } from "../data/VisitRequest";


function VisitList() {

    const data: any[] = getRandomVisitData();
    return (
        <>

            <Table hasCheckboxesOrRadio={false}>
                <Table.Head>
                    <Table.Row>
                        <Table.HeadCell>Establishment Name</Table.HeadCell>
                        <Table.HeadCell>Establishment Economic Activity</Table.HeadCell>
                        <Table.HeadCell>Visit Status</Table.HeadCell>
                        <Table.HeadCell>Visit Date</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {data.map((est) => (
                        <Table.Row>
                            <Table.Cell>{est.EstablishmentName}</Table.Cell>
                            <Table.Cell>{est.EstablishmentEconomicActivity}</Table.Cell>
                            <Table.Cell>{est.VisitStatus}</Table.Cell>
                            <Table.Cell>{est.VisitDate.toString()}</Table.Cell>
                            <Table.Cell >
                                <a href="/pcrequest/performance-certificate/:id">

                                    <IconButton
                                        variant="business"
                                        iconComponent={Eye}

                                    />
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    );
}

export default VisitList