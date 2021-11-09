import React, { useEffect, useState } from 'react';
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/Posts/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/Posts/PostFilter";
import PostList from "../components/Posts/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";


function Posts() {
    //массив постов который получаем с сервера
    const [posts, setPosts] = useState([])
    //сортировка и поиск, пустые передаются в постфильтер
    const [filter, setFilter] = useState({ sort: '', query: '' })
    //показывает модалку если тру
    const [modal, setModal] = useState(false);
    // количетсво страниц всего, высчитывается в getPageCount
    const [totalPages, setTotalPages] = useState(0);
    //лимит выбираемы в селекте, сколько постов на странице будет
    const [limit, setLimit] = useState(10);
    //номер текущей страницы
    const [page, setPage] = useState(1);
    //наш массив постов который передается в постлист и отрисовывается (когда он меняется он перерисовывается)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    //через наш хук заполняем массив постов и количество стриниц под них и крутим пока не загрузит
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        //тут в хедере передается количество постов всего
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })
    //при изменении страницы или лимита получаем заново посты
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    //пропсом даем в postform
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        //при срабатывании в пофстформ скрываем модальное окно
        setModal(false)
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        //если айдишники равны удаляем пост
        setPosts(posts.filter(p => p.id !== post.id))
    }
    //при переходе на другую страницу
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'Показать все' },
                ]}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
