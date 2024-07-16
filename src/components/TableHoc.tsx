import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai"
import { Column, TableOptions, usePagination, useSortBy, useTable } from "react-table"

function TableHoc<T extends object>(
    columns:Column<T>[],
    data: T[],
    containerClassName: string,
    heading: string,
    showPagination: boolean = false
){
    
  return function Hoc(){
    const options:TableOptions<T> = {
        columns,
        data,
        initialState:{
            pageSize: 5
        }
    }
    // const table = useTable(options)
    const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,nextPage,previousPage,canNextPage,canPreviousPage,pageCount,state:{pageIndex}}= useTable(options,useSortBy,usePagination)
     
    return(
        <div className={containerClassName}>
            <h2 className="heading">{heading}</h2>

            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((h) =>(
                        <tr {...h.getHeaderGroupProps()}>
                            {h.headers.map((column) =>(
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                        {column.isSorted && (
                                            <span>
                                                {" "}
                                                {column.isSortedDesc ? (
                                                <AiOutlineSortDescending />
                                                ) : (
                                                <AiOutlineSortAscending />
                                                )}
                                            </span>
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {
                showPagination && 
                <div className="tablePagination">
                    <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
                    <span>{`${pageIndex+1} of ${pageCount}`}</span>
                    <button disabled={!canNextPage} onClick={nextPage}>Next</button>
                </div>
            }
        </div>
    )
  }
}

export default TableHoc