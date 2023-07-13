import React from 'react';
import { Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
  key: string;
  name: string;
  number: number; // Thêm trường number cho số vé
  tags: string[];
  dateUsed: string; // Thêm trường dateUsed cho ngày sử dụng
  in: string,
}

const columns: ColumnsType<DataType> = [
  {
    title: 'STT ',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Số vé',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Tên lọai vé',
    dataIndex: 'name',
    key: 'name',
  },
  
  {
    title: 'Ngày sử dụng',
    dataIndex: 'dateUsed',
    key: 'dateUsed',
  },
  {
    title: 'Cổng check- in',
    dataIndex: 'in',
    key: 'in',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'ALT20210501',
    number: 12,
    tags: ['Hết Hạn'],
    dateUsed: '2023-07-01', // Thêm giá trị ngày sử dụng
    in: 'ALT20210501',
  
  },
  {
    key: '2',
    name: 'Jim Green',
    number: 42,
    tags: ['Hết Hạn'],
    dateUsed: '2023-07-02',
    in: 'ALT20210501',
  
  },
  {
    key: '3',
    name: 'Joe Black',
    number: 32,
    tags: ['Hết Hạn'],
    dateUsed: '2023-07-03',
    in: 'ALT20210501',
    
  },
];
const Doisoatve: React.FC = () => <Table columns={columns} dataSource={data} />;

export default Doisoatve;