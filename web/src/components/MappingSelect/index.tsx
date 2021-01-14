import React from 'react';
import _ from 'lodash';

import { Mapping } from 'shared/src/contrib/aidbox';

import s from './MappingSelect.module.scss';

interface MappingSelectProps {
    mappingList: Mapping[];
    activeMappingId: string | undefined;
    setActiveMappingId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function MappingSelect({ mappingList, activeMappingId, setActiveMappingId }: MappingSelectProps) {
    if (mappingList.length === 1) {
        return <div />;
    }

    return (
        <div className={s.wrapper}>
            {_.map(mappingList, ({ id }) => (
                <button
                    type={'button'}
                    // href="/#"
                    key={id}
                    onClick={() => {
                        setActiveMappingId(id);
                    }}
                    className={id === activeMappingId ? s.checked : s.item}
                >
                    {id}
                </button>
            ))}
        </div>
    );
}
