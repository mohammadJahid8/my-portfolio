import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useDetail = () => {
    const [detail, setDetail] = useState({});
    // console.log(detail);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const project = data.find(project => project.id == id);
                setDetail(project);
            });
    }, [id]);


    return [detail];
};

export default useDetail;