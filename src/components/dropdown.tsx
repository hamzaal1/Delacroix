import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

interface Props {
    items: MenuProps['items'];
    title: string | React.ReactNode;
}

const DropdownView = ({ items, title }: Props) => {
    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {title}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
};

export default DropdownView;