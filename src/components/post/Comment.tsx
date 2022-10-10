import moment from 'moment';
import React from 'react';

const Comment = ({ comment }: { comment: any; }) => {
    return (
        <div className="flex">
            <div className="flex-shrink-0 mr-3">
                <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="/icons/user.png" alt="commentimage" />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                <strong className="text-white">{comment.commenter}</strong> <span className="text-xs text-gray-400">{moment(comment.created_at).format('LT')}</span>
                <p className="text-sm text-gray-300">
                    {comment.body}
                </p>

            </div>
        </div>
    );
};

export default React.memo(Comment);