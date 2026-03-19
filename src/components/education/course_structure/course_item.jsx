function CourseItem({ item }) {
    return (
        <div className="col-4">
            <div className="shadow-lg rounded p-3 h-100">
                <h3 className='text-center'>{item.term}</h3>
                <hr className="hr-style" />
                {
                    item.subjects.map((subject, index) => (
                        <p key={index}><i class="fa-solid fa-caret-right"></i>{subject}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseItem