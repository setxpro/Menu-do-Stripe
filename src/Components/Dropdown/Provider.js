import React, { useCallback, useState, useEffect } from "react";

const Context = React.createContext();

export function DropdownProvider({children}) {

    const [options, setOptions] = useState([]);
    const [targetId, setTargetId] = useState(null);
    const [cacheId, setCacheId] = useState(null);

    const registerOption = useCallback(({
            id,
            optionDimensions,
            optionCenterX,
            WrappedContent,
            backgroundHeight,
        }) => {
            setOptions(items => [
                ...items,
                {
                    id,
                    optionDimensions,
                    optionCenterX,
                    WrappedContent,
                    backgroundHeight,
                },
            ]);



        },
        [setOptions]
    );

    const updateOptionProps = useCallback((optionId, props) => {
        setOptions((items) => 
            items.map((item) => {
                if (item.id === optionId) {
                    item = {...item, ...props};
                }
                return item;
            })
        )
    }, [setOptions]);

    const getOptionById = useCallback(
        (id) => options.find((item) => item.id === id), 
    [options]);

    const deleteOptionById = useCallback((id) => {
        setOptions(items => items.filter(item => item.id !== id))
    }, [setOptions])

    useEffect(() => {
        if (targetId !== null) setCacheId(targetId);

    }, [targetId]);
    return (
        <Context.Provider 
            value={{ 
                registerOption,
                updateOptionProps,
                getOptionById,
                deleteOptionById,
                options,
                targetId,
                setTargetId,
                cacheId,
                setCacheId
            }}
        >
            {children}
        </Context.Provider>
    );
}