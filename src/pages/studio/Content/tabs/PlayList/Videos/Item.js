import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Videos.module.css';
function Item({ item, stt }) {
    return (
        <div className={clsx(styles.item)}>
            <div className={clsx(styles.poster)}>
                <div className={clsx(styles.number)}>{stt}</div>
                <div className={clsx(styles.img)}>
                    <img src={item.video_poster} />
                    <Link
                        to={`/watch?category=${item.category_id}&id=${item.video_id}&list=${item.playlist_id}&index=${stt}`}
                    ></Link>
                </div>
            </div>
            <div className={clsx(styles.info)}>
                <div className={clsx(styles.title)}>
                    <Link
                        to={`/watch?category=${item.category_id}&id=${item.video_id}&list=${item.playlist_id}&index=${stt}`}
                    >
                        {item.video_title}
                    </Link>
                </div>
                <div
                    className={clsx(styles.des)}
                    dangerouslySetInnerHTML={{
                        __html: item.video_des,
                    }}
                ></div>
                <div className={clsx(styles.date)}>
                    {/* <span>{item.playlist_update_time}</span> */}
                    <span>Cập nhật 2 ngày trước</span>
                </div>
            </div>
        </div>
    );
}

export default Item;
