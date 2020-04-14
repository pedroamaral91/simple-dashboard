import React from 'react';
import ReactExport from 'react-export-excel';
import { FaFileExcel } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from './styles';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;
const { ExcelColumn } = ReactExport.ExcelFile;

interface ExcelProps {
  data: Record<string, any>[];
  columns: [
    {
      label: string;
      value: string | number;
    },
  ];
  filename?: string;
  name?: string;
  messageSuccess?: string;
}

export default function Excel({
  data,
  columns,
  filename = 'relatorio',
  name = 'Dados',
  messageSuccess = 'Sucesso! Verifique sua caixa de download',
}: ExcelProps) {
  return (
    <>
      {data.length > 0 && (
        <ExcelFile
          filename={filename}
          element={
            <Container onClick={() => toast.success(messageSuccess)}>
              <FaFileExcel color="#0C6635" size={30} />
            </Container>
          }
        >
          <ExcelSheet data={data} name={name}>
            {columns.map(column => (
              <ExcelColumn label={column.label} value={column.value} />
            ))}
          </ExcelSheet>
        </ExcelFile>
      )}
    </>
  );
}
