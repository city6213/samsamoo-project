package com.server.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMember is a Querydsl query type for Member
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMember extends EntityPathBase<Member> {

    private static final long serialVersionUID = -1617599994L;

    public static final QMember member = new QMember("member1");

    public final ListPath<Board, QBoard> boardList = this.<Board, QBoard>createList("boardList", Board.class, QBoard.class, PathInits.DIRECT2);

    public final SetPath<Comment, QComment> commentList = this.<Comment, QComment>createSet("commentList", Comment.class, QComment.class, PathInits.DIRECT2);

    public final DateTimePath<java.util.Date> deleteDate = createDateTime("deleteDate", java.util.Date.class);

    public final StringPath email = createString("email");

    public final BooleanPath enabled = createBoolean("enabled");

    public final StringPath id = createString("id");

    public final StringPath imagePath = createString("imagePath");

    public final StringPath nickName = createString("nickName");

    public final StringPath password = createString("password");

    public final DateTimePath<java.util.Date> regisDate = createDateTime("regisDate", java.util.Date.class);

    public final SetPath<Reply, QReply> replyList = this.<Reply, QReply>createSet("replyList", Reply.class, QReply.class, PathInits.DIRECT2);

    public final EnumPath<Role> role = createEnum("role", Role.class);

    public final DateTimePath<java.util.Date> updateDate = createDateTime("updateDate", java.util.Date.class);

    public QMember(String variable) {
        super(Member.class, forVariable(variable));
    }

    public QMember(Path<? extends Member> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMember(PathMetadata metadata) {
        super(Member.class, metadata);
    }

}

