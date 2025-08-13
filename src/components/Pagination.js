

export default function Pagination(props) {
 const {currentPage, setCurrentPage} = props;

        const next = () => {
        if(currentPage !== 42) setCurrentPage (currentPage + 1)
    }

    const prev = () => {
        if(currentPage !== 1) setCurrentPage (currentPage - 1)
    }
  return (
    // <div style={{display: "flex", justifyContent: "space-around"}}>
    <div className="paginacion">
        <button className="btn-primary" onClick={prev}>Back</button>
        <h3>{currentPage} / 42</h3>
        <button className="btn-primary" onClick={next}>Next</button>
    </div>
  )
}
