import React, {FC, useEffect, useState} from 'react';
import styles from '../../PostInfo/PostInfo.module.scss'

interface PostTextProps {
    text: string
}

const PostText: FC<PostTextProps> = ({text}) => {
    const [chart, setChart] = useState<number[]>([])

    const check = () => {
        const target = "\n";
        let pos = 0
        let result: number[] = []
        while (true) {
            let foundPos = text.indexOf(target, pos);
            if (foundPos === -1) break;
            result = [...result, foundPos]
            pos = foundPos + 1; // продолжаем со следующей позиции
        }
        setChart(result)
    }

    useEffect(() => {
        check()
    }, [])
    return (
        <div>
            {text.slice(0, chart[0]) !== '' &&
                <p className={styles.desc}>{text.slice(0, chart[0])}<br/></p>
            }
            {chart.map((t, index) =>
                <p className={styles.desc} key={index}>{text.slice(t, chart[index + 1])}<br/></p>
            )}
        </div>
    );
};

export default PostText;