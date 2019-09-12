package com.programming.techie.springredditclone.repository;

import com.programming.techie.springredditclone.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}