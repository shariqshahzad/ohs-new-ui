import { Button, DatePicker, Search } from "@takamol/qiwa-design-system/components";
import { Select } from "@takamol/qiwa-design-system/components"
import React, { useState } from "react";
import { statusesForESTSelect } from "../constant/ESTStatus";

const ESFilters = () => {
    const [status, setStatus] = useState('');
    const [statusFilterInputValue, setStatusFilterInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const handleClearFilters = () => {
        setSearchValue('');
        setStartDate('');
        setEndDate('')
        setStatus('');

    }
    return (
        <div className="filters-container">
            <div className="filter-item">
                <Search
                    id="test"
                    isBordered
                    label="Search Report"
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onClear={() => {
                        setSearchValue('')
                    }}
                    onSubmit={undefined}
                    placeholder="Search Report"
                    size="small"
                    value={searchValue}
                    variant="business"
                />
            </div>
            <div className="filter-item">
                <Select
                    id="select"
                    isWithFilter
                    label="Status"
                    maxInputWidth={[
                        '100%',
                        240
                    ]}
                    onChange={(e) => {
                        setStatus(e);
                    }}
                    onInputChange={(e) => {
                        setStatusFilterInputValue(e)
                    }}
                    options={statusesForESTSelect()}
                    filterInputValue={statusFilterInputValue}
                    value={status}
                    variant="individuals"
                />
            </div>
            <div className="filter-item">
                <DatePicker
                    closeButtonLabel="Cancel"
                    confirmButtonLabel="Set date"
                    id="default-date-picker"
                    label="Start Date"
                    onChange={(start: any) => setStartDate(start)}
                    selectDateLabel="Select Date"
                    value={startDate}
                    variant="business"
                />
            </div>
            <div className="filter-item">
                <DatePicker
                    closeButtonLabel="Cancel"
                    confirmButtonLabel="Set date"
                    id="default-date-picker"
                    label="End Date"
                    onChange={(end: any) => { setEndDate(end) }}
                    selectDateLabel="Select Date"
                    value={endDate}
                    variant="business"
                />
            </div>
            <div className="filter-actions">
                <Button >
                    Apply
                </Button>

            </div>
            <div className="filter-actions">
                <Button variant="business_ghost"
                    onClick={() => handleClearFilters()}
                >
                    Clear
                </Button>

            </div>

        </div>
    )
}

export default ESFilters;
