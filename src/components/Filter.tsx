import React, { useState, useCallback } from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleType, VehicleFilter } from "../data/vehicles/contracts";

export const Filter: React.FC<{ updateVehicles: (filter: VehicleFilter) => void }> = ({ updateVehicles }) => {
    const [searchText, setSearchText] = useState("");
    const [selectedType, setSelectedType] = useState<VehicleType | null>(null);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        updateFilter(event.target.value, selectedType);
    };

    const handleTypeChange = useCallback((type: VehicleType | null) => {
        setSelectedType(type);
        updateFilter(searchText, type);
    }, [searchText]);

    const updateFilter = (title: string, type: VehicleType | null) => {
        const filter: VehicleFilter = {
            title,
            type,
        };
        updateVehicles(filter);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск..."
                value={searchText}
                onChange={handleTextChange}
            />
            <VehicleTypeSelect
                value={selectedType}
                onChange={handleTypeChange}
            />
        </div>
    );
};
